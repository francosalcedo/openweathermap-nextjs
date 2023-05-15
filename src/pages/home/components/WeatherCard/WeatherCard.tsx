'use client'

import styles from './WeatherCard.module.scss'

import Image from 'next/image'

import HighIcon from 'public/images/icons/high-icon.svg';
import LowIcon from 'public/images/icons/low-icon.svg';

import { CityWeather } from '@/models/weather.model'

import WeatherIcon from '@/components/WeatherIcon/WeatherIcon';
import WeatherItems from '@/pages/home/components/WeatherItems/WeatherItems';
import FavoriteStart from '@/pages/home/components/FavoriteStart/FavoriteStart';

interface WeatherCardProps {
  city: CityWeather
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city }) => {

  if (!city) {
    return null;
  }

  return (
    <div className={styles.weather}>
      <div className={styles.weather__container}>
        <div className={styles.weather__city }>
          <h1 className={styles.name}>{ city.name } <FavoriteStart city={city.name} /></h1>
          <div className={styles.temp}>{ city.main.temp } <sup>&deg;</sup></div>
          <div className={styles.icon }>
            <WeatherIcon code={ city.weather[0].id } />
          </div>
        </div>
        <div className={styles.weather__information}>
          <div className={styles.feeling}>
            <span>Se siente como</span><span>{ city.main.feels_like }{' '}<sup>&deg;</sup></span>
          </div>
          <div className={styles.forecast}>
            <div><Image className={styles.up} src={HighIcon} alt="" /><span>{ city.main.temp_max }<sup>&deg;</sup></span></div>
            <div><Image className={styles.down} src={LowIcon} alt="" /><span>{ city.main.temp_min }<sup>&deg;</sup></span></div>
          </div>
          <WeatherItems
            wind={city.wind.speed}
            humidity={city.main.humidity}
            pressure={city.main.pressure}
          />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
