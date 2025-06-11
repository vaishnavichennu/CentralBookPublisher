// import React from 'react'
// import { useCart } from '../../context/CartContext'
// import { formatPrice } from '../../utils/formatPrice'

// export default function Cart({ onCheckout }) {
//   const { items, removeFromCart, clearCart } = useCart()

//   const subtotal = items.reduce(
//     (sum, { product, quantity }) => sum + product.unitprice * quantity,
//     0
//   )

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
//       {items.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {items.map(({ product, quantity }) => (
//               <div key={product.id} className="flex justify-between items-center">
//                 <div>
//                   <h3 className="font-medium">{product.bookname}</h3>
//                   <p className="text-gray-600">
//                     {quantity} × {formatPrice(product.unitprice)}
//                   </p>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <span className="font-semibold">{formatPrice(product.unitprice * quantity)}</span>
//                   <button
//                     onClick={() => removeFromCart(product.id)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-6 flex justify-between items-center">
//             <span className="text-xl font-semibold">Subtotal:</span>
//             <span className="text-xl font-semibold">{formatPrice(subtotal)}</span>
//           </div>
//           <div className="mt-6 flex space-x-4">
//             <button
//               onClick={onCheckout}
//               className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
//             >
//               Checkout
//             </button>
//             <button
//               onClick={() => clearCart()}
//               className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }