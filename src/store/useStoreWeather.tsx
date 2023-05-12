import { CityWeather } from '@/models/weather.model'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface WeatherState {
  cityQuery: string | null
  setCityQuery: (value: string) => void
  weather: CityWeather | null,
  setWeather: (value: CityWeather) => void
}

export const useStoreWeather = create<WeatherState>()(
  devtools(
    (set) => ({
      cityQuery: null,
      setCityQuery: (cityQuery) => set(() => ({ cityQuery })),
      weather: null,
      setWeather: (weather) => set(() => ({ weather })),
    }),
    {
      name: 'weather-storage',
    }
  )
)
