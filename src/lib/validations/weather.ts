import { z } from 'zod'

export const WeatherFormSchema = z.object({
  location: z.string().min(1, { message: 'Must be at least 1 character' }),
})
