import styles from './FavoriteCities.module.scss'

import { useFavoriteCities } from '@/store/useFavoriteCities'
import { useStoreWeather } from '@/store/useStoreWeather'

const FavoriteCities = () => {
  const { cities } = useFavoriteCities()
  const { setCityQuery } = useStoreWeather()

  return (
    <>
      {
        cities.length > 0 &&
        <div className={styles.cities}>
          {
            cities.map(city => <span onClick={() => setCityQuery(city)} key={city}>{ city }</span>)
          }
        </div>
      }
    </>
  )
}

export { FavoriteCities }
