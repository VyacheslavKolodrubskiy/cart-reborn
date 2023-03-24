import type { AxiosRequestConfig } from 'axios'
import { api } from 'src/boot/axios'
import { serverErrorHandler } from '../../utils/server-error-handler'
import type { ErrorType } from '../types'

/**
 * A custom hook which uses Axios to make API requests.
 *
 * @async
 * @template T - The expected response data type
 * @param {AxiosRequestConfig} config - The axios request configuration object including URL, method, headers etc.
 * @returns {Promise<T>} Returns a promise that resolves with response data.
 * @throws Throws an error if there is any issue with the API call or if the response is not in the expected format.
 */
export async function useAxios<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const { data } = await api(config)

    return data as T
  } catch (error) {
    serverErrorHandler(error as ErrorType)
    throw error
  }
}
