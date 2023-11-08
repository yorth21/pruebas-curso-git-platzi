import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000
})

export async function post (url, data, config = {}) {
  try {
    const response = await api.post(url, data, config)
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.data
    } else {
      return { error: 'Sin codigo de error' }
    }
  }
}

export async function get (url, config = {}) {
  try {
    const response = await api.get(url, config)
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response.data
    } else {
      return { error: 'Sin codigo de error' }
    }
  }
}

export function setToken (token) {
  window.localStorage.setItem('token', token)
}

export function getToken () {
  return window.localStorage.getItem('token')
}

export function removeToken () {
  window.localStorage.removeItem('token')
}
