'use client'

import { SearchWeather } from '@/app/_actions/search-weather'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { WeatherFormSchema } from '../../lib/validations/weather'

const Form = FormProvider

type Inputs = z.infer<typeof WeatherFormSchema>

const WeatherSearchForm = () => {
  const [locationInput, setLocationInput] = useState('Seoul')
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
      <form onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}>
        <label htmlFor="location" className="text-white">
          Location
        </label>
        <input
          className="bg-zinc-800 text-white"
          type="text"
          id="location"
          {...form.register('location')}
        />
        <button className="text-white">Submit</button>
      </form>
    </Form>
  )
}

export { WeatherSearchForm }
