import axios from 'axios'

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'https://devdeskbackend.herokuapp.com/api',
  })
}

export const axiosWithAuth = token => {
  return axios.create({
    baseURL: 'https://devdeskbackend.herokuapp.com/api',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  })
}
