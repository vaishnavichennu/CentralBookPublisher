
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     try {
//       await login(email, password);
//       navigate('/'); // Home route can redirect based on role
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//       >
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         {error && <div className="text-red-500 mb-2">{error}</div>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-3 p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
//         >
//           Login
//         </button>

//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don’t have an account?{' '}
//           <span
//             className="text-indigo-600 hover:underline cursor-pointer"
//             onClick={() => navigate('/register')}
//           >
//             Register
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }
// File: src/pages/Login.jsx

// File: src/pages/Login.jsx
// Testing
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMsg(`Submitted Email: "${email}"  Password: "${password}"`);
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', fontFamily: 'sans-serif' }}>
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           border: '1px solid #ccc',
//           borderRadius: '8px',
//           padding: '1.5rem',
//           width: '320px',
//         }}
//       >
//         <h2 style={{ marginBottom: '1rem' }}>Login</h2>

//         {msg && (
//           <div style={{ marginBottom: '1rem', color: 'green', fontSize: '0.875rem' }}>
//             {msg}
//           </div>
//         )}

//         <div style={{ marginBottom: '1rem' }}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
//           />
//         </div>
//         <div style={{ marginBottom: '1rem' }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '0.75rem' }}>
//           Login
//         </button>

//         <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
//           Don’t have an account?{' '}
//           <button
//             type="button"
//             onClick={() => navigate('/register')}
//             style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
//           >
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// File: src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/'); // go to protected home
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
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
        <h2 style={{ marginBottom: '1rem' }}>Login</h2>
        {error && <div style={{ color: 'red', marginBottom: '0.75rem' }}>{error}</div>}

        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem' }}>
          Login
        </button>

        <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
          Don’t have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/register')}
            style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
