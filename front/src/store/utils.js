import axios from 'axios'

axios.defaults.baseURL = 'http://172.31.255.106:3333/'

export const requests = {
  get(url, type) {
    return dispatch => axios
      .get(url)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  post(url, data, type) {
    return dispatch => axios
      .post(`${url}`, data)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  put(url, data, type) {
    return dispatch => axios
      .put(url, data)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },

  patch(url, data, type) {
    return dispatch => axios
      .patch(url, data)
      .then(response => {
        dispatch({
          type: type,
          payload: response.data
        })
        return response
      })
      .catch(error => {
        throw error
      })
  },
}