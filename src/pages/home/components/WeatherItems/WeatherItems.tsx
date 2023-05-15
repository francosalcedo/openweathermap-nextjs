import styles from './WeatherItems.module.scss'

import Image from 'next/image'
import HumidityIcon from 'public/images/icons/humidity-icon.svg';
import PressureIcon from 'public/images/icons/pressure-icon.svg';
import WindIcon from 'public/images/icons/wind-icon.svg';

interface WeatherItemsProps {
  humidity: number
  wind: number
  pressure: number
}

const WeatherItems: React.FC<WeatherItemsProps> = (props) => {
  const { humidity, wind, pressure } = props

  return (
    <div className={styles.items}>
        <div><Image src={HumidityIcon} alt="Humedad" /><span>Humedad</span></div>
        <div><span>{ humidity } %</span></div>
        <div><Image src={WindIcon} alt="Viento" /><span>Viento</span></div>
        <div><span>{ wind } kph</span></div>
        <div><Image src={PressureIcon} alt="Presión" /><span>Presión</span></div>
        <div><span>{ pressure} hPa</span></div>
    </div>
  )
}

export default WeatherItems
