import axios from 'axios'

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'https://devdeskbackend.herokuapp.com/api',
  })
}
