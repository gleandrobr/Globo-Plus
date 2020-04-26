import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/'

export const requests = {
  get(url, type) {
    return axios.get(url)
      .then((response) => {
        return { type: type, payload: response }
      })
      .catch((error) => {
        throw error
      })
  },

  post(url, data, type) {
    return axios.post(url, data)
      .then((response) => {
        return { type: type, payload: response }
      })
      .catch((error) => {
        throw error
      })
  },

  delete(url, type) {
    return axios.delete(url)
      .then((response) => {
        return { type: type, payload: response }
      })
      .catch((error) => {
        throw error
      })
  }
}