import React from 'react'

export default function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}