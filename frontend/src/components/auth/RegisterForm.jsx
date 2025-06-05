import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'customer',
  })
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await register(formData)
      navigate('/otp-verify')
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed')
    }
  }

  return (
    <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="customer">Customer</option>
        <option value="admin">Admin</option>
      </select>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Register
      </button>
    </form>
  )
}