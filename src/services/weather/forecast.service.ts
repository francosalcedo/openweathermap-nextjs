import { Service, ServiceUnexpectedException, ApiException} from '@/services/utils'
import { ok, Result } from 'neverthrow'

import { handleError } from '@/services/catch'
import { GenericServiceException } from '@/services/exception'
import { WeatherApi } from '@/apis/weather.api'
import { Forecast } from '@/models/forecast.model'
import { kelvinToCelcius } from '@/utils/conversions'

interface TransformationData {
  transformation(forecast: Forecast): Forecast
}

type Response = Result<
  Forecast,
  GenericServiceException | ServiceUnexpectedException | ApiException
>

export class FindForecastByCity implements Service<string, Response>, TransformationData {
  constructor(private api: WeatherApi) {
    this.api = api
  }

  async execute(city: string): Promise<Response> {
    try {
      const { data } = await this.api.findForecastByCity(city)
      return ok(this.transformation(data))
    } catch (error: any) {
      console.error(error)
      throw handleError(error)
    }
  }

  transformation(forecast: Forecast) {
    forecast.list = forecast.list.map(list => ({
        ...list,
        main: {
          ...list.main,
          temp: kelvinToCelcius(list.main.temp),
          feels_like: kelvinToCelcius(list.main.feels_like),
          temp_max: kelvinToCelcius(list.main.temp_max),
          temp_min: kelvinToCelcius(list.main.temp_min),
        },
        dt_txt: new Date(list.dt_txt),
        wind: {
          ...list.wind,
          speed: Math.round(list.wind.speed * 3.6)
        }
      })
    );

    const forecastGroupsByDay = forecast.list.reduce((acc: any, curr: any, index: number) => {
      const dayOfWeek = curr.dt_txt.toLocaleDateString('es-ES', {weekday: 'long'});
      const groupIndex = Math.floor(index / 8);
      acc[groupIndex] = acc[groupIndex] || { day: dayOfWeek, list: [] };
      acc[groupIndex].list.push(curr);
      return acc;
    }, []);

    forecast.days = forecastGroupsByDay;
    return forecast;
  }
}
