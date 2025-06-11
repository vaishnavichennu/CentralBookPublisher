// import React from 'react'
// import { useCart } from '../../context/CartContext'
// import { formatPrice } from '../../utils/formatPrice'

// export default function ProductGrid({ productsByCategory }) {
//   const { addToCart } = useCart()

//   return (
//     <div className="space-y-8">
//       {Object.entries(productsByCategory).map(([category, items]) => (
//         <div key={category}>
//           <h2 className="text-2xl font-semibold mb-3">{category}</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {items.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
//               >
//                 <h3 className="font-semibold mb-2">{item.bookname}</h3>
//                 <p className="text-gray-600">Qty: {item.qty}</p>
//                 <p className="text-gray-600">Price: {formatPrice(parseFloat(item.unitprice))}</p>
//                 <p className="text-gray-600 mb-2">
//                   Total: {formatPrice(parseFloat(item.totalprice))}
//                 </p>
//                 <button
//                   onClick={() => addToCart(item, 1)}
//                   className="bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }