
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     phone: '',
//     role: 'customer',
//   });
//   const [error, setError] = useState('');
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await register(formData);
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Registration failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold mb-4">Register</h2>
//         {error && <div className="text-red-500 mb-2">{error}</div>}

//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone (optional)"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         />

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="customer">Customer</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-sm text-center text-gray-600">
//           Already have an account?{' '}
//           <span
//             className="text-indigo-600 hover:underline cursor-pointer"
//             onClick={() => navigate('/login')}
//           >
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }
// File: src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'customer',
  });
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
      // After successful registration, redirect to login
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1.5rem',
          width: '320px',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Register</h2>
        {error && <div style={{ color: 'red', marginBottom: '0.75rem' }}>{error}</div>}

        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: '0.75rem' }}>
          Register
        </button>

        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
