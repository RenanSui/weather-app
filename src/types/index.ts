export interface WeatherCurrentSchema {
  temp_c: number
  is_day: number
  condition: {
    text: string
    icon: string
    code: number
  }
  wind_kph: number
  humidity: number
  cloud: number
}

export interface WeatherLocationSchema {
  name: string
  localtime: string
}

export interface WeatherSchema {
  location: WeatherLocationSchema
  current: WeatherCurrentSchema
  dayTime: string
  dayCondition: string
  colorFormButton: string
}
