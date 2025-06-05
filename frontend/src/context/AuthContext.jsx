import React, { createContext, useContext, useState, useEffect } from 'react'
import { getLocalToken, setLocalToken, removeLocalToken } from '../utils/tokenStorage'
import { login as loginAPI, register as registerAPI, verifyOTP as verifyOTPAPI } from '../services/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // On mount, check for stored token and decode
  useEffect(() => {
    const token = getLocalToken()
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUser({ id: payload.id, role: payload.role, email: payload.email })
      } catch {
        removeLocalToken()
      }
    }
  }, [])

  const login = async (email, password) => {
    const response = await loginAPI({ email, password })
    const { token } = response.data
    setLocalToken(token)
    const payload = JSON.parse(atob(token.split('.')[1]))
    setUser({ id: payload.id, role: payload.role, email: payload.email })
  }

  const logout = () => {
    removeLocalToken()
    setUser(null)
  }

  const register = async data => {
    return registerAPI(data)
  }

  const verifyOTP = async (email, otp) => {
    return verifyOTPAPI({ email, otp })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register, verifyOTP }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}