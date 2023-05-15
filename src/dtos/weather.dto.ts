import { CityWeather } from '@/models/weather.model'
import { Forecast } from '@/models/forecast.model'

export interface findByCityDto {
  data: CityWeather
}

export interface findForecastByCityDto {
  data: Forecast
}
