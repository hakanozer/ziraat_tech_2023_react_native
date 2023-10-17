import axios from 'axios'
import { UserModel } from './models/UserModel'

const baseUrl = 'https://dummyjson.com/'
const config = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  //headers: { token: 'token123', },
  //auth: { username: '',password: ''}
})


// User Login
export const login = (username: string, password: string) => {
  const sendObj = {
    username: username,
    password: password
  }
  return config.post<UserModel>('auth/login', sendObj)
}





