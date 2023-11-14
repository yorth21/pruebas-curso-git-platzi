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
    return error.response.data
  }
}

export async function get (url, config = {}) {
  try {
    const response = await api.get(url, config)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export function setLocalStorage (name, token) {
  window.localStorage.setItem(name, token)
}

export function getLocalStorage (name) {
  return window.localStorage.getItem(name)
}

export function removeLocalStorage (name) {
  window.localStorage.removeItem(name)
}
