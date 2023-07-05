'use client'

import { useContext } from 'react'
import { WeatherSearchForm } from './forms/search-weather-form'
import { WeatherContext } from './weather-context'
import { WeatherDetails } from './weather-details'
import { LocationList } from './weather-location-list'

const WeatherPanel = () => {
  const { state } = useContext(WeatherContext)
  const { isFetched, isError } = state

  return (
    <section
      className="relative z-10 flex flex-1 flex-col overflow-y-auto border border-solid border-[#ffffff2d] bg-[#6e6e6e3f] px-8 py-8 font-normal text-[#ccc] shadow-customWeather backdrop-blur-md"
      style={{
        opacity: !isFetched ? '0' : isError ? '0' : '1',
      }}
    >
      <WeatherSearchForm />
      <LocationList />
      <WeatherDetails />
    </section>
  )
}

export { WeatherPanel }
