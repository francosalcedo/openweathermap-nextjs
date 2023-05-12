/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import styles from './ResultsWeather.module.scss'
import { useCityWeather } from '@/hooks/wheather/useCityWeather'
import { useStoreWeather } from '@/store/useStoreWeather'
import Loader from '@/components/Loader/Loader'
import WeatherCard from '@/pages/home/components/WeatherCard/WeatherCard'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'

interface ResultsWeatherProps {
  query: string
}

const ResultsWeather: React.FC<ResultsWeatherProps> = ({ query }) => {
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
        !svc.error && !svc.isLoading && weather && <WeatherCard weather={weather} />
      }
    </>
  )
}

export default ResultsWeather
