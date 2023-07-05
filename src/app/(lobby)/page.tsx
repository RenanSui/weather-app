import { WeatherDetails } from '@/components/WeatherDetails'
import { WeatherSearchForm } from '@/components/forms/search-weather-form'
import { Shell } from '@/components/shell'
import { WeatherCurrent } from '@/components/weather-current'

const Home = () => {
  return (
    <main
      className="flex h-screen bg-cover bg-center bg-no-repeat transition-all duration-500 after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-0 after:block after:h-full after:w-full after:bg-[rgba(0,0,0,0.3)]"
      // sm:flex-row-reverse
      // style={{
      //   backgroundImage: weather
      //     ? `url(./images/${weather.dayTime}/${weather.dayCondition}.jpg)`
      //     : 'none',
      //   // isFetched not true ? opacity is 0 || isError true ? opacity is 0
      //   opacity: !isFetched ? '0' : isError ? '0' : '1',
      // }}
    >
      <WeatherCurrent />
      <Shell className="relative z-10 flex flex-1 flex-col overflow-y-auto border border-solid border-[#ffffff2d] bg-[#6e6e6e3f] px-8 py-8 font-normal text-[#ccc] shadow-customWeather backdrop-blur-md">
        <WeatherSearchForm />
        {/* <LocationList /> */}
        <WeatherDetails />
      </Shell>
    </main>
  )
}

export default Home
