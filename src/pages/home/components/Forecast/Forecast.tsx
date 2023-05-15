/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import styles from './Forecast.module.scss'

import { useForecastWeather } from '@/hooks/weather/useForecastWeather'
import { useStoreWeather } from '@/store/useStoreWeather'

import ErrorMessage from '@/components/ErrorMessage/ErrorMessage'
import Loader from '@/components/Loader/Loader'
import ForecastCard from '@/pages/home/components/ForecastCard/ForecastCard'

interface ForecastProps {
  query: string
}

const Forecast: React.FC<ForecastProps> = ({ query }) => {
  const svc = useForecastWeather(query)
  const { forecast, setForecast } = useStoreWeather()

  useEffect(() => {
    if (svc.data) setForecast(svc.data)
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
        !svc.error && !svc.isLoading && forecast && <div className={styles.forecast}>
          <div className={styles.forecast__container}>
            <h2 className={styles.forecast__title}>Pronostico para 5 días</h2>
            <div className={styles.forecast__days}>
              {
                forecast.days?.map(day => (
                  <ForecastCard
                    day={day}
                    key={day.day}
                  />
                ))
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Forecast
