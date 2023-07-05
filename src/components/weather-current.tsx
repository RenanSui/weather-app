'use client'
import { useContext } from 'react'
import { WeatherContext } from './weather-context'

const WeatherCurrent = () => {
  const { state } = useContext(WeatherContext)
  const { weather, isFetched, isError } = state

  const date = weather?.location.localtime
  const year = date?.substr(0, 4).padStart(2, '0')
  const month = date?.substr(5, 2).padStart(2, '0')
  const day = date?.substr(8, 2).padStart(2, '0')
  const time = date?.substr(11).padStart(5, '0')

  const dayOfTheWeek = (day: string, month: string, year: string) => {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return weekday[new Date(`${month}/${day}/${year}`).getDay()]
  }

  return (
    <>
      {weather && (
        <section
          className="flex flex-wrap justify-center py-10 text-white transition-all duration-300 sm:mx-6 sm:mt-auto sm:w-4/12 sm:items-end sm:justify-start md:w-6/12 md:px-0 lg:ml-12 lg:w-7/12 lg:justify-start"
          aria-labelledby="main-location-weather-details"
          style={{
            opacity: !isFetched ? '0' : isError ? '0' : '1',
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: weather
                ? `url(./images/${weather.dayTime}/${weather.dayCondition}.jpg)`
                : 'none',
            }}
          />
          <h1 className="hidden" id="main-location-weather-details">
            Location temperature detail
          </h1>
          <p className="mx-2 flex justify-center text-8xl tracking-wide sm:mb-3">
            {Math.floor(weather.current.temp_c)}°
          </p>
          <section
            className="mx-2 mb-3 flex flex-col justify-end font-medium"
            aria-labelledby="sub-location-weather-details"
          >
            <h1 className="hidden" id="sub-location-weather-details">
              Location name and time details
            </h1>
            <p className="mb-3 break-all text-center text-4xl tracking-wide transition-all sm:text-left md:text-5xl">
              {weather.location.name}
            </p>
            <section
              className="mx-auto text-xs tracking-wide sm:mx-0 sm:mb-1"
              aria-labelledby="location-time-hour-details"
            >
              <h1 className="hidden" id="location-time-hour-details">
                Location time details
              </h1>
              <p className="inline-block">{time} - </p>
              <p className="inline-block">
                {`${dayOfTheWeek(day, month, year)}`}
                {` ${month}/${day}/${year}`}
              </p>
            </section>
          </section>
          <section
            id="weather-condition"
            className="mb-3 ml-3 flex flex-col items-center justify-end tracking-wide"
            aria-labelledby="location-weather-condition"
          >
            <h1 className="hidden" id="location-weather-condition">
              Location Weather condition
            </h1>
            <img src={weather.current.condition.icon} alt="icon" className="" />
            <p className="inline-block text-sm font-medium">
              {weather.current.condition.text}
            </p>
          </section>
        </section>
      )}
    </>
  )
}

export { WeatherCurrent }
