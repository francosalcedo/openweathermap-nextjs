import { AxiosInstance } from 'axios'

import { createAxiosInstance } from '@/apis/config/axios.config'
import {
  findByCityDto
} from '@/dtos'

export class WeatherApi {
  api: AxiosInstance

  constructor() {
    this.api = createAxiosInstance()
  }

  findByCity(city: string): Promise<findByCityDto> {
    return this.api.get(`/weather?q=${city}`)
  }
}
