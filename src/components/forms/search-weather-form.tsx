'use client'

import { SearchWeather } from '@/app/_actions/search-weather'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { WeatherFormSchema } from '../../lib/validations/weather'
import { WeatherContext } from '../weather-context'

const Form = FormProvider

type Inputs = z.infer<typeof WeatherFormSchema>

const WeatherSearchForm = () => {
  const [locationInput, setLocationInput] = useState('Seoul')
  const { state } = useContext(WeatherContext)
  SearchWeather(locationInput, setLocationInput)

  const form = useForm({
    resolver: zodResolver(WeatherFormSchema),
    defaultValues: { location: '' },
  })

  const onSubmit = async (data: Inputs) => {
    console.log(data)

    setLocationInput(data.location)

    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
        className="mb-9 flex justify-between pt-3 transition-all duration-300"
      >
        <h1 className="hidden">Type Your Location Input</h1>

        <input
          className="w-4/5 self-end border-b border-[#ccc] bg-transparent text-sm font-medium text-white outline-none transition-all duration-500 placeholder:font-normal placeholder:text-[#ccc] only-of-type:pl-[3px] sm:text-lg"
          type="text"
          id="location"
          {...form.register('location')}
          placeholder="Search Location..."
        />
        <button
          className={`absolute right-0 top-0 px-3 py-4 transition-all duration-500 sm:px-5 sm:py-6 
					${state.weather?.colorFormButton}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6 md:h-6"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="M5.5 10a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM10 2.5a7.5 7.5 0 1 0 4.136 13.757l4.803 4.804a1.5 1.5 0 0 0 2.122-2.122l-4.804-4.803A7.5 7.5 0 0 0 10 2.5Z"
              />
            </g>
          </svg>
        </button>
      </form>
    </Form>
  )
}

export { WeatherSearchForm }
