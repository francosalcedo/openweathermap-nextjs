"use client"

import styles from './FavoriteCities.module.scss'

import { useFavoriteCities } from '@/store/useFavoriteCities'
import { useStoreWeather } from '@/store/useStoreWeather'
import { useEffect, useState } from 'react'

const FavoriteCities = () => {
  const { cities } = useFavoriteCities()
  const { setCityQuery } = useStoreWeather()
  const [list, setList] = useState<string[]>([])

  useEffect(() => {
    setList(cities)
  }, [cities])


  return (
    <>
      {
        list && list.length > 0 &&
        <div className={styles.cities}>
          {
            list && list.map(city => <span onClick={() => setCityQuery(city)} key={city}>{ city }</span>)
          }
        </div>
      }
    </>
  )
}

export { FavoriteCities }
