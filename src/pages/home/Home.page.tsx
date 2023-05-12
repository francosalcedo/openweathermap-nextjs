"use client"

import { useStoreWeather } from '@/store/useStoreWeather'
import styles from './Home.module.scss'
import ResultsWeather from './components/ResultsWeather/ResultsWeather'
import SearchBox from './components/SearchBox/SearchBox'

const Home = () => {
  const { cityQuery } = useStoreWeather()

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
