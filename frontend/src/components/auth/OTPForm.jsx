import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function OTPForm() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const { verifyOTP } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await verifyOTP(email, otp)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.error || 'OTP verification failed')
    }
  }

  return (
    <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <input
        type="text"
        placeholder="OTP (e.g., 123456)"
        value={otp}
        onChange={e => setOtp(e.target.value)}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Verify OTP
      </button>
    </form>
  )
}