import { ErrorCodes } from "@/services/constants"
import { GenericServiceException } from "@/services/exception"
import { useEffect } from "react"
import { Err, err } from 'neverthrow'

interface ErrorMessageProps {
  error?: Err<GenericServiceException, any>
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <>
      {
        error?.error.code === ErrorCodes.GenericServiceNotFound && <span>No se encontró la ciudad</span>
      }
      {
        !error && <span>Ocurrió un error</span>
      }
    </>
  )
}

export { ErrorMessage }
