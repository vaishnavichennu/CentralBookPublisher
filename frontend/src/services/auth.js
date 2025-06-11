import api from './api'

// export function register(data) {
//   return api.post('/auth/register', data)
// }

// export function login(data) {
//   return api.post('/auth/login', data)
// }

// export function verifyOTP(data) {
//   return api.post('/auth/otp-verify', data)
// }

// Register endpoint: expects { name, email, password, phone, role }
export const register = (data) => api.post('/auth/register', data);

// Login endpoint: expects { email, password }, returns { token }
export const login = (data) => api.post('/auth/login', data);