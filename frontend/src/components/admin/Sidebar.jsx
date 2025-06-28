// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function Sidebar() {
//   const linkClasses = ({ isActive }) =>
//     `flex items-center px-4 py-2 mb-2 rounded-md transition-colors ${
//       isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white'
//     }`

//   return (
//     <aside className="w-64 bg-gray-800 text-gray-300 flex-shrink-0">
//       <div className="p-6 text-2xl text-white font-bold">Admin Panel</div>
//       <nav className="px-4">
//         <NavLink to="schools" className={linkClasses}>
//           Schools
//         </NavLink>
//         <NavLink to="categories" className={linkClasses}>
//           Categories
//         </NavLink>
//         <NavLink to="products" className={linkClasses}>
//           Products
//         </NavLink>
//         <NavLink to="orders" className={linkClasses}>
//           Orders
//         </NavLink>
//         <NavLink to="orderlines" className={linkClasses}>
//           OrderLines
//         </NavLink>
//       </nav>
//     </aside>
//   )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, List, BookOpen, ShoppingCart } from 'lucide-react';

const navItems = [
  { to: 'schools', label: 'Schools', icon: <Home size={18}/> },
  { to: 'categories', label: 'Categories', icon: <List size={18}/> },
  { to: 'products', label: 'Products', icon: <BookOpen size={18}/> },
  { to: 'orders', label: 'Orders', icon: <ShoppingCart size={18}/> },
  { to: 'orderlines', label: 'OrderLines', icon: <List size={18}/> },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-xl h-screen flex flex-col p-4 space-y-6">
      <h1 className="text-2xl font-bold text-indigo-700">Admin</h1>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
             ${isActive ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`
          }
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
}
