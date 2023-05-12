import styles from './WeatherCard.module.scss'

import Image from 'next/image'

import HighIcon from 'public/images/icons/high-icon.svg';
import LowIcon from 'public/images/icons/low-icon.svg';
import HumidityIcon from 'public/images/icons/humidity-icon.svg';
import PressureIcon from 'public/images/icons/pressure-icon.svg';
import WindIcon from 'public/images/icons/wind-icon.svg';

import { CityWeather } from '@/models/weather.model'
import WeatherIcon from '@/components/WheatherIcon/WheaterIcon';
import { TempUnit, kmToMile } from '@/utils/conversions';

interface WeatherCardProps {
  weather: CityWeather
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {

  return (
    <div className={styles.weather}>
      <div className={styles.weather__container}>
        <div className={styles.weather__city }>
          <div className={styles.name}>{ weather.name }</div>
          <div className={styles.icon }>
            <WeatherIcon code={ weather.weather[0].id } />
          </div>
        </div>
        <div className={styles.weather__information}>
          <div className={styles.feeling}>
            <span>Se siente como</span><span>{ weather.main.feels_like }{' '}<sup>&deg;</sup></span>
          </div>
          <div className={styles.forecast}>
            <div><Image className={styles.up} src={HighIcon} alt="" /><span>{ weather.main.temp_max }<sup>&deg;</sup></span></div>
            <div><Image className={styles.down} src={LowIcon} alt="" /><span>{ weather.main.temp_min }<sup>&deg;</sup></span></div>
          </div>
          <div className={styles.items}>
              <div><Image src={HumidityIcon} alt="" /><span>Humedad</span></div>
              <div><span>76 %</span></div>
              <div><Image src={WindIcon} alt="" /><span>Viento</span></div>
              <div><span>{ weather.wind.speed } kph</span></div>
              <div><Image src={PressureIcon} alt="" /><span>Presión</span></div>
              <div><span>{ weather.main.pressure} hPa</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
