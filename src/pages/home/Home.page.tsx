/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'

import styles from './Home.module.scss'

import { useStoreWeather } from '@/store/useStoreWeather'
import FavoriteCities from './components/FavoriteCities/FavoriteCities'
import SearchBox from './components/SearchBox/SearchBox'
import ScreenWeather from './components/ScreenWeather/ScreenWeather'

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
