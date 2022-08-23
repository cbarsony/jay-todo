import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import useToast from './toast'

const useApi = () => {
  const toaster = useToast()
  const history = useHistory()
  const api = useMemo(() => {
    const axios = Axios.create({baseURL: 'http://localhost:3001'})

    axios.interceptors.response.use(config => {
        console.log(config)
        return config
    }, error => {
        const status = error.response?.status ?? 500
        const message = error.response?.data?.message ?? 'Something went wrong'

        if(status === 401) {
          history.push('/login')
        }
        toaster.error(message)
        return Promise.reject(error)
    })

    return axios
  }, [toaster, history])

  return api
}

export default useApi
