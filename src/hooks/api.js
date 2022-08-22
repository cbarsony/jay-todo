import Axios from 'axios'

const axios = Axios.create({baseURL: 'http://localhost:3001'})

const useApi = () => {
    return axios
}

export default useApi
