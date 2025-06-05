import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center px-4 py-2 mb-2 rounded-md transition-colors ${
      isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
    }`

  return (
    <aside className="w-64 bg-gray-800 text-gray-300 flex-shrink-0">
      <div className="p-6 text-2xl text-white font-bold">Admin Panel</div>
      <nav className="px-4">
        <NavLink to="schools" className={linkClasses}>
          Schools
        </NavLink>
        <NavLink to="categories" className={linkClasses}>
          Categories
        </NavLink>
        <NavLink to="products" className={linkClasses}>
          Products
        </NavLink>
        <NavLink to="orders" className={linkClasses}>
          Orders
        </NavLink>
        <NavLink to="orderlines" className={linkClasses}>
          OrderLines
        </NavLink>
      </nav>
    </aside>
  )
}
