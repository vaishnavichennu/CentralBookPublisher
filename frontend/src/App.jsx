// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// ───────────────────────────────────────────────────────────────────────────────
// File: frontend/src/App.jsx
// Main router and route guards
// ───────────────────────────────────────────────────────────────────────────────
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import OTPVerify from './pages/OTPVerify'
import CustomerFlow from './pages/CustomerFlow'
import CartPage from './pages/CartPage'
import AdminDashboard from './pages/AdminDashboard'
import AdminSchools from './pages/AdminSchools'
import AdminCategories from './pages/AdminCategories'
import AdminProducts from './pages/AdminProducts'
import AdminOrders from './pages/AdminOrders'
import AdminOrderlines from './pages/AdminOrderlines'

// Protected route for authenticated users
function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

// Only allow admin routes if role === 'admin'
function AdminRoute({ children }) {
  const { user } = useAuth()
  return user?.role === 'admin' ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verify" element={<OTPVerify />} />

          {/* Customer‐only pages */}
          <Route
            path="/customer"
            element={
              <PrivateRoute>
                <CustomerFlow />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />

          {/* Admin pages */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          >
            {/* Nested admin routes */}
            <Route index element={<Navigate to="schools" />} />
            <Route path="schools" element={<AdminSchools />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="orderlines" element={<AdminOrderlines />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<div className="p-8">404 – Page Not Found</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
