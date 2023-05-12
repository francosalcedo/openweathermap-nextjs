/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useStoreWeather } from '@/store/useStoreWeather'
import styles from './Home.module.scss'
import ResultsWeather from './components/ResultsWeather/ResultsWeather'
import SearchBox from './components/SearchBox/SearchBox'
import { useEffect } from 'react'

const Home = () => {
  const { cityQuery, setCityQuery } = useStoreWeather()

  useEffect(() => {
    setCityQuery(String(process.env.NEXT_PUBLIC_DEFAULT_CITY))
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__title}>Wheater Ionix</div>
        <SearchBox />
        {
          cityQuery && <ResultsWeather query={cityQuery} />
        }
      </div>
    </div>
  )
}

export default Home
