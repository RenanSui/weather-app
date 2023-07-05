import { Dispatch, ReactNode, RefObject, SetStateAction } from 'react'

export interface IFormProps {
  inputValueRef: RefObject<HTMLInputElement>
  setLocationInput: Dispatch<SetStateAction<string>>
  formButtonColor: string
  children?: ReactNode
}
