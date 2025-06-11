
// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
// import { AuthProvider, useAuth } from './context/AuthContext'

// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import OTPVerify from './pages/OTPVerify'
// import CustomerFlow from './pages/CustomerFlow'
// import CartPage from './pages/CartPage'
// import AdminDashboard from './pages/AdminDashboard'
// import AdminSchools from './pages/AdminSchools'
// import AdminCategories from './pages/AdminCategories'
// import AdminProducts from './pages/AdminProducts'
// import AdminOrders from './pages/AdminOrders'
// import AdminOrderlines from './pages/AdminOrderlines'

// // Protected route for authenticated users
// function PrivateRoute({ children }) {
//   const { user } = useAuth()
//   return user ? children : <Navigate to="/login" />
// }

// // Only allow admin routes if role === 'admin'
// function AdminRoute({ children }) {
//   const { user } = useAuth()
//   return user?.role === 'admin' ? children : <Navigate to="/login" />
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/otp-verify" element={<OTPVerify />} />

//           {/* Customer‐only pages */}
//           <Route
//             path="/customer"
//             element={
//               <PrivateRoute>
//                 <CustomerFlow />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/cart"
//             element={
//               <PrivateRoute>
//                 <CartPage />
//               </PrivateRoute>
//             }
//           />

//           {/* Admin pages */}
//           <Route
//             path="/admin"
//             element={
//               <AdminRoute>
//                 <AdminDashboard />
//               </AdminRoute>
//             }
//           >
//             {/* Nested admin routes */}
//             <Route index element={<Navigate to="schools" />} />
//             <Route path="schools" element={<AdminSchools />} />
//             <Route path="categories" element={<AdminCategories />} />
//             <Route path="products" element={<AdminProducts />} />
//             <Route path="orders" element={<AdminOrders />} />
//             <Route path="orderlines" element={<AdminOrderlines />} />
//           </Route>

//           {/* 404 fallback */}
//           <Route path="*" element={<div className="p-8">404 – Page Not Found</div>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   )
// }
// File: src/App.jsx
//--------------------
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';

// import Register from './pages/Register';
// import Login from './pages/Login';

// function PrivateRoute({ children }) {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />

//           {/* Placeholder home: redirect to login if not authenticated */}
//           <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <div className="p-8 text-center">
//                   <h1 className="text-3xl">Welcome!</h1>
//                   <p>You are logged in. (Implement further pages later)</p>
//                 </div>
//               </PrivateRoute>
//             }
//           />

//           {/* Fallback */}
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// Testing
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';

// // We won’t use AuthContext or anything else yet—just test that /login renders.
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {/* Redirect any other path to /login */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// File: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Login from './pages/Login';
import Register from './pages/Register';

// PrivateRoute: only render children if user is logged in
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Example protected route: / */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div style={{ padding: '2rem' }}>
                  <h1>Welcome, you are logged in!</h1>
                  <p>Placeholder for protected home screen.</p>
                </div>
              </PrivateRoute>
            }
          />

          {/* Redirect any unknown path to /login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
