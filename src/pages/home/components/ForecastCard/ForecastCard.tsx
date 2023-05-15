import styles from './ForecastCard.module.scss'

import Image from 'next/image'
import HourIcon from 'public/images/icons/hour-icon.svg';
import { WeatherIcon } from '@/components';

import { ForecastDay } from "@/models/forecast.model"

interface ForecastCardProps {
  day: ForecastDay
}

const ForecastCard: React.FC<ForecastCardProps> = (props) => {
const { day } = props

const hourPrev = (date: Date) => {
  const datePrev = date.getHours() === 0 ? 24 : date.getHours()
  return `${(datePrev - 3).toString().padStart(2, '0')} - ${(date.getHours()).toString().padStart(2, '0')}`
}

  return (
    <div className={styles.day}>
      <h4 className={styles.day__title}>{ day.day }</h4>
      <div className={styles.day__list}>
        {
          day.list.map(item => (
            <div className={styles.day__item} key={item.dt}>
              <div className={styles.hour}><Image src={HourIcon} alt="Hora" /> { hourPrev(item.dt_txt) }</div>
              <div>
                <WeatherIcon width={30} height={30} code={ item.weather[0].id } />
              </div>
              <div className={styles.description}>{ item.weather[0].description }</div>
              <div className={styles.temp}>
                { item.main.temp_max }<sup>&deg;</sup> / { item.main.temp_min }<sup>&deg;</sup>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ForecastCard
