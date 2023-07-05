import { ReactQueryProvider } from '@/components/react-query-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { WeatherProvider } from '@/components/weather-context'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Weather - 天気',
  description: 'Simple Weather App',
  icons: {
    icon: 'images/favicon.ico',
    shortcut: 'images/favicon.ico',
    apple: 'images/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'images/apple-touch-icon.png',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">
        <WeatherProvider>
          <ReactQueryProvider>
            {children}
            <TailwindIndicator />
          </ReactQueryProvider>
        </WeatherProvider>
      </body>
    </html>
  )
}
