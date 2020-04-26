import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/'

export const get = (url, type) => {
  return axios.get(url)
    .then((response) => {
      return { type: type, payload: response }
    })
    .catch((error) => {
      throw error
    })
}

export const post = (url, data, type) => {
  return axios.post(url, data)
    .then((response) => {
      return { type: type, payload: response }
    })
    .catch((error) => {
      throw error
    })
}