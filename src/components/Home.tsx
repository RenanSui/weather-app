// packages
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'

// components
import { Form } from './Form'
import { LocationList } from './LocationList'
import { SpanAlert } from './SpanAlert'
import { Weather } from './Weather'
import { WeatherDetails } from './WeatherDetails'

// utilities
import { IWeather } from '../interfaces/Weather'
import { api } from '../utils/api'

const Home = () => {
  const queryClient = useQueryClient()
  const [locationInput, setLocationInput] = useState<string>('Tokyo')
  const inputValueRef = useRef<HTMLInputElement>(null)
  const [alertTimer, setAlertTimer] = useState<Boolean>(false)
  const locations: Array<string> = ['Gramado', 'Cotswold', 'Tokyo', 'Zermatt']

  const {
    data: weather,
    isFetched,
    isError,
  } = useQuery<IWeather>(
    ['weather', locationInput],
    () => api.get(locationInput),
    {
      keepPreviousData: true,
      retry: false,
      onError: () => {
        api.fetchError(setAlertTimer)
        setLocationInput(api.getPreviousWeather(queryClient))
      },
      onSettled: () => {
        if (inputValueRef.current) {
          inputValueRef.current.focus()
        }
      },
    },
  )

  return (
    <main
      className={
        'flex h-screen flex-col bg-cover bg-center bg-no-repeat transition-all duration-500 after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-0 after:block after:h-full after:w-full after:bg-[rgba(0,0,0,0.3)] sm:flex-row'
      }
      style={{
        backgroundImage: weather
          ? `url(./images/${weather.dayTime}/${weather.dayCondition}.jpg)`
          : 'none',
        // isFetched not true ? opacity is 0 || isError true ? opacity is 0
        opacity: !isFetched ? '0' : isError ? '0' : '1',
      }}
    >
      {/* main weather panel */}
      {weather && <Weather weather={weather} />}

      <section className="relative z-10 flex flex-1 flex-col overflow-y-auto border border-solid border-[#ffffff2d] bg-[#6e6e6e3f] px-6 py-6 font-normal text-[#ccc] shadow-customWeather backdrop-blur-md">
        {/* form input */}
        <Form
          inputValueRef={inputValueRef}
          setLocationInput={setLocationInput}
          formButtonColor={weather ? weather.colorFormButton : 'none'}
        />

        {/* locations list */}
        <LocationList
          locations={locations}
          setLocationInput={setLocationInput}
        />

        {/* weather details */}
        {weather && <WeatherDetails weather={weather} />}
      </section>

      {/* error alert */}
      {alertTimer && <SpanAlert />}
    </main>
  )
}

export default Home
