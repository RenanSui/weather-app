'use client'

import { queryClient } from '@/components/react-query-provider'
import { WeatherContext } from '@/components/weather-context'
import { WEATHER_API_URL, getDayOrNight } from '@/lib/utils'
import { WeatherSchema } from '@/types'
import { QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Dispatch, useContext, useEffect } from 'react'
import { toast } from 'sonner'

const SearchWeather = async (
  locationInput: string,
  setLocationInput: Dispatch<string>,
) => {
  const { dispatch } = useContext(WeatherContext)

  // const fetchError = (setAlertTimer: Dispatch<SetStateAction<Boolean>>) => {
  //   setAlertTimer(true)
  //   setTimeout(() => {
  //     setAlertTimer(false)
  //   }, 3 * 1000)
  // }

  const getPreviousWeather = (queryClient: QueryClient) => {
    const previousWeather = queryClient
      .getQueriesData(['weather'])
      .filter((previous: any) => {
        if (!(previous[1] === undefined)) {
          return previous
        }
        return null
      })

    console.log(previousWeather)
    return previousWeather[previousWeather.length - 1][0][1] as string
  }

  const {
    data: weather,
    isFetched,
    isError,
  } = useQuery<WeatherSchema>(
    ['weather', locationInput],
    async () => {
      const { data } = await axios.get(
        `${WEATHER_API_URL}&params=${locationInput}`,
      )
      const { dayOrNight } = getDayOrNight(data.data)
      const WeatherSchema = { ...dayOrNight, ...data.data }
      return WeatherSchema
    },
    {
      keepPreviousData: true,
      retry: false,
      refetchOnWindowFocus: false,
      onError: () => {
        console.log('An Error Occurred. Please Try Again.')
        toast.error('An Error Occurred. Please Try Again.')
        setLocationInput(getPreviousWeather(queryClient))
      },
    },
  )

  // console.log(weather === undefined ? 'Não tá pronto' : weather)
  useEffect(() => {
    if (weather)
      dispatch({
        type: 'newWeather',
        payload: { weather, isFetched, isError },
      })
  }, [dispatch, isError, isFetched, weather])
}

export { SearchWeather }
