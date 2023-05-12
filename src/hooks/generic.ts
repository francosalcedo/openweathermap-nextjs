import { useState } from 'react'

export const useApiService = (service: any, request?: any) => {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const execute = async () => {
    setError(null)
    setIsLoading(false)
    try {
      setIsLoading(true)
      const result = await service.execute(request)
      if (result.isOk()) {
        setData(result.value)
      }
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    error,
    execute,
    isLoading,
  }
}
