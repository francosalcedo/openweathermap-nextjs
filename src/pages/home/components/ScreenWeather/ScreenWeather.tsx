/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import styles from './ScreenWeather.module.scss'

import { useCityWeather } from '@/hooks/weather/useCityWeather'
import { useStoreWeather } from '@/store/useStoreWeather'

import { Loader, ErrorMessage } from '@/components'
import { Forecast, WeatherCard } from '@/pages/home/components'

interface ScreenWeatherrops {
  query: string
}

const ScreenWeather: React.FC<ScreenWeatherrops> = ({ query }) => {
  const svc = useCityWeather(query)
  const { weather, setWeather } = useStoreWeather()

  useEffect(() => {
    if (svc.data) setWeather(svc.data)
  }, [svc.data])

  useEffect(() => {
    svc.execute()
  }, [query])

  return (
    <>
      {
        svc.isLoading && <Loader />
      }
      {
        !svc.isLoading && svc.error && <ErrorMessage error={svc.error} />
      }
      {
        !svc.error && !svc.isLoading && weather && <>
          <WeatherCard city={weather} />
          <Forecast query={query} />
        </>
      }
    </>
  )
}

export { ScreenWeather }
