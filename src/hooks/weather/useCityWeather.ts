import { WeatherApi } from '@/apis/weather.api'
import { useApiService } from '@/hooks/generic'
import { FindCityService } from '@/services/weather/weather.service'

export const useCityWeather = (city: string) => {
  const api = new WeatherApi()
  const service = new FindCityService(api)

  return useApiService(service, city)
}
