/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect } from 'react'

import styles from './Home.module.scss'

import { useStoreWeather } from '@/store/useStoreWeather'
import { SearchBox, ScreenWeather, FavoriteCities } from './components'

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
        <FavoriteCities />
        {
          cityQuery && <ScreenWeather query={cityQuery} />
        }
      </div>
    </div>
  )
}

export default Home
