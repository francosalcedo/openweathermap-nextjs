import { WeatherApi } from '@/apis/weather.api'
import { useApiService } from '@/hooks/generic'
import { FindForecastByCity } from '@/services/weather/forecast.service'

export const useForecastWeather = (city: string) => {
  const api = new WeatherApi()
  const service = new FindForecastByCity(api)

  return useApiService(service, city)
}
