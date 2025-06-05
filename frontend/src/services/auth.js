import api from './api'

export function register(data) {
  return api.post('/auth/register', data)
}

export function login(data) {
  return api.post('/auth/login', data)
}

export function verifyOTP(data) {
  return api.post('/auth/otp-verify', data)
}