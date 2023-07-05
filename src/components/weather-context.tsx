'use client'

import { WeatherSchema } from '@/types'
import { Dispatch, ReactNode, createContext, useReducer } from 'react'

interface initialStatesProps {
  weather: WeatherSchema
  isFetched: boolean
  isError: boolean
  // errorAlert: boolean
}

const initialState = {} as initialStatesProps

type State = typeof initialState

type Action = { type: 'newWeather'; payload: State }
// | { type: 'errorAlert'; payload: boolean }

const weatherReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'newWeather':
      return { ...action.payload }
    // case 'errorAlert':
    //   return { ...state, errorAlert: action.payload }
    default:
      throw new Error(`Unhandled action type`)
  }
}

interface WeatherContextProps {
  state: State
  dispatch: Dispatch<Action>
}

export const WeatherContext = createContext<WeatherContextProps>(
  {} as WeatherContextProps,
)

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState)

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherProvider }
