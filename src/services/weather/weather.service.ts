import { Service, ServiceUnexpectedException, ApiException} from '@/services/utils'
import { ok, Result } from 'neverthrow'

import { handleError } from '@/services/catch'
import { GenericServiceException } from '@/services/exception'
import { WeatherApi } from '@/apis/weather.api'
import { CityWeather } from '@/models/weather.model'

type Response = Result<
  CityWeather,
  GenericServiceException | ServiceUnexpectedException | ApiException
>

export class FindCityService implements Service<string, Response> {
  constructor(private api: WeatherApi) {
    this.api = api
  }

  async execute(city: string): Promise<Response> {
    try {
      const { data } = await this.api.findByCity(city)
      return ok(data)
    } catch (error: any) {
      throw handleError(error)
    }
  }
}

