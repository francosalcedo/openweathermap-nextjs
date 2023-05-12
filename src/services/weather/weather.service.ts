import { Service, ServiceUnexpectedException, ApiException} from '@/services/utils'
import { ok, Result } from 'neverthrow'

import { handleError } from '@/services/catch'
import { GenericServiceException } from '@/services/exception'
import { WeatherApi } from '@/apis/weather.api'
import { CityWeather } from '@/models/weather.model'
import { kelvinToCelcius } from '@/utils/conversions'

interface TransformationData {
  transformation(cityWeather: CityWeather): CityWeather
}

type Response = Result<
  CityWeather,
  GenericServiceException | ServiceUnexpectedException | ApiException
>

export class FindCityService implements Service<string, Response>, TransformationData {
  constructor(private api: WeatherApi) {
    this.api = api
  }

  async execute(city: string): Promise<Response> {
    try {
      const { data } = await this.api.findByCity(city)
      return ok(this.transformation(data))
    } catch (error: any) {
      throw handleError(error)
    }
  }

  transformation(cityWeather: CityWeather) {
    cityWeather.main = {
      ...cityWeather.main,
      temp: kelvinToCelcius(cityWeather.main.temp),
      feels_like: kelvinToCelcius(cityWeather.main.feels_like),
      temp_max: kelvinToCelcius(cityWeather.main.temp_max),
      temp_min: kelvinToCelcius(cityWeather.main.temp_min),
    }
    cityWeather.wind.speed = Math.round(cityWeather.wind.speed * 3.6)
    return cityWeather
  }
}

