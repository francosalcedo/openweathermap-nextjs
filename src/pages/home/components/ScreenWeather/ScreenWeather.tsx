/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import styles from './ScreenWeather.module.scss'

import { useCityWeather } from '@/hooks/weather/useCityWeather'
import { useStoreWeather } from '@/store/useStoreWeather'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import WeatherCard from '@/pages/home/components/WeatherCard/WeatherCard'
import Forecast from '@/pages/home/components/Forecast/Forecast'

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

export default ScreenWeather
