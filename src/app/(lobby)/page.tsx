import { WeatherCurrent } from '@/components/weather-current'
import { WeatherPanel } from '@/components/weather-panel'

const Home = () => {
  return (
    <main
      className="flex h-screen flex-col bg-cover bg-center bg-no-repeat transition-all duration-500 after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-0 after:block after:h-full after:w-full after:bg-[rgba(0,0,0,0.3)] sm:flex-row"
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
      <WeatherPanel />
    </main>
  )
}

export default Home
