import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface ILocationListProps {
  setLocationInput: Dispatch<SetStateAction<string>>
  locations: Array<string>
  children?: ReactNode
}
