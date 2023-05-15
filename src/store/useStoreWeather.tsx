import { CityWeather } from '@/models/weather.model'
import { Forecast } from '@/models/forecast.model'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface WeatherState {
  cityQuery: string | null
  setCityQuery: (value: string) => void
  weather: CityWeather | null,
  setWeather: (value: CityWeather) => void
  forecast: Forecast | null,
  setForecast: (value: Forecast) => void
}

export const useStoreWeather = create<WeatherState>()(
  devtools(
    (set) => ({
      cityQuery: null,
      setCityQuery: (cityQuery) => set(() => ({ cityQuery })),
      weather: null,
      setWeather: (weather) => set(() => ({ weather })),
      forecast: null,
      setForecast: (forecast: Forecast) => set(() => ({ forecast }))
    }),
    {
      name: 'weather-storage',
    }
  )
)
