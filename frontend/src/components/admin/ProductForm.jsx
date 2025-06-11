
// // Form and table to manage products; wired to admin.js service calls
// import React, { useEffect, useState } from 'react'
// import {
//   getProducts,
//   addProduct,
//   updateProduct,
//   deleteProduct,
//   getSchools,
//   getCategories,
// } from '../../services/admin'
// import Input from '..auth/common/Input'
// import Button from '..auth/common/Button'

// export default function ProductForm() {
//   const [products, setProducts] = useState([])
//   const [schools, setSchools] = useState([])
//   const [categories, setCategories] = useState([])

//   const [formData, setFormData] = useState({
//     bookname: '',
//     qty: 1,
//     unitprice: '',
//     catid: '',
//     schoolid: '',
//     class: '',
//     ismandatory: false,
//     hindi2nd: false,
//     hindi3rd: false,
//     telugu2nd: false,
//     telugu3rd: false,
//   })
//   const [editingId, setEditingId] = useState(null)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     fetchProducts()
//     fetchSchools()
//     fetchCategories()
//   }, [])

//   const fetchProducts = async () => {
//     try {
//       const { data } = await getProducts()
//       setProducts(data)
//       setError('')
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to load products')
//     }
//   }

//   const fetchSchools = async () => {
//     try {
//       const { data } = await getSchools()
//       setSchools(data)
//     } catch {
//       // ignore
//     }
//   }

//   const fetchCategories = async () => {
//     try {
//       const { data } = await getCategories()
//       setCategories(data)
//     } catch {
//       // ignore
//     }
//   }

//   const handleInputChange = e => {
//     const { name, type, value, checked } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }))
//   }

//   const handleAddOrUpdate = async () => {
//     try {
//       if (editingId) {
//         await updateProduct(editingId, formData)
//         setEditingId(null)
//       } else {
//         await addProduct(formData)
//       }
//       setFormData({
//         bookname: '',
//         qty: 1,
//         unitprice: '',
//         catid: '',
//         schoolid: '',
//         class: '',
//         ismandatory: false,
//         hindi2nd: false,
//         hindi3rd: false,
//         telugu2nd: false,
//         telugu3rd: false,
//       })
//       fetchProducts()
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to save product')
//     }
//   }

//   const startEdit = product => {
//     setEditingId(product.id)
//     setFormData({
//       bookname: product.bookname,
//       qty: product.qty,
//       unitprice: product.unitprice,
//       catid: product.catid,
//       schoolid: product.schoolid,
//       class: product.class,
//       ismandatory: Boolean(product.ismandatory),
//       hindi2nd: Boolean(product.hindi2nd),
//       hindi3rd: Boolean(product.hindi3rd),
//       telugu2nd: Boolean(product.telugu2nd),
//       telugu3rd: Boolean(product.telugu3rd),
//     })
//   }

//   const handleDelete = async id => {
//     try {
//       await deleteProduct(id)
//       fetchProducts()
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to delete product')
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-4">Manage Products</h1>
//       {error && <div className="text-red-500 mb-2">{error}</div>}

//       {/* Add / Edit Product Form */}
//       <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Input
//           name="bookname"
//           type="text"
//           placeholder="Book Name"
//           value={formData.bookname}
//           onChange={handleInputChange}
//         />
//         <Input
//           name="qty"
//           type="number"
//           placeholder="Quantity"
//           value={formData.qty}
//           onChange={handleInputChange}
//         />
//         <Input
//           name="unitprice"
//           type="number"
//           step="0.01"
//           placeholder="Unit Price"
//           value={formData.unitprice}
//           onChange={handleInputChange}
//         />
//         <select
//           name="catid"
//           value={formData.catid}
//           onChange={handleInputChange}
//           className="p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="">Select Category</option>
//           {categories.map(cat => (
//             <option key={cat.id} value={cat.id}>
//               {cat.catname}
//             </option>
//           ))}
//         </select>
//         <select
//           name="schoolid"
//           value={formData.schoolid}
//           onChange={handleInputChange}
//           className="p-2 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//         >
//           <option value="">Select School</option>
//           {schools.map(sch => (
//             <option key={sch.id} value={sch.id}>
//               {sch.name}
//             </option>
//           ))}
//         </select>
//         <Input
//           name="class"
//           type="text"
//           placeholder="Class"
//           value={formData.class}
//           onChange={handleInputChange}
//         />

//         <div className="flex items-center space-x-2">
//           <input
//             name="ismandatory"
//             type="checkbox"
//             checked={formData.ismandatory}
//             onChange={handleInputChange}
//             className="h-4 w-4"
//           />
//           <label>Is Mandatory</label>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             name="hindi2nd"
//             type="checkbox"
//             checked={formData.hindi2nd}
//             onChange={handleInputChange}
//             className="h-4 w-4"
//           />
//           <label>Hindi 2nd</label>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             name="hindi3rd"
//             type="checkbox"
//             checked={formData.hindi3rd}
//             onChange={handleInputChange}
//             className="h-4 w-4"
//           />
//           <label>Hindi 3rd</label>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             name="telugu2nd"
//             type="checkbox"
//             checked={formData.telugu2nd}
//             onChange={handleInputChange}
//             className="h-4 w-4"
//           />
//           <label>Telugu 2nd</label>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input
//             name="telugu3rd"
//             type="checkbox"
//             checked={formData.telugu3rd}
//             onChange={handleInputChange}
//             className="h-4 w-4"
//           />
//           <label>Telugu 3rd</label>
//         </div>
//         <div className="col-span-2">
//           <Button onClick={handleAddOrUpdate}>
//             {editingId ? 'Update Product' : 'Add Product'}
//           </Button>  
//         </div>
//       </div>

//       {/* Products Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-md overflow-hidden shadow">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="px-4 py-2">ID</th>
//               <th className="px-4 py-2">Book Name</th>
//               <th className="px-4 py-2">Qty</th>
//               <th className="px-4 py-2">Unit Price</th>
//               <th className="px-4 py-2">Category</th>
//               <th className="px-4 py-2">School</th>
//               <th className="px-4 py-2">Class</th>
//               <th className="px-4 py-2">Mandatory</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map(product => (
//               <tr key={product.id} className="border-t">
//                 <td className="px-4 py-2">{product.id}</td>
//                 <td className="px-4 py-2">{product.bookname}</td>
//                 <td className="px-4 py-2">{product.qty}</td>
//                 <td className="px-4 py-2">{product.unitprice}</td>
//                 <td className="px-4 py-2">{product.catid}</td>
//                 <td className="px-4 py-2">{product.schoolid}</td>
//                 <td className="px-4 py-2">{product.class}</td>
//                 <td className="px-4 py-2">{product.ismandatory ? 'Yes' : 'No'}</td>
//                 <td className="px-4 py-2 space-x-2">
//                   <Button onClick={() => startEdit(product)} className="bg-yellow-500 hover:bg-yellow-600">
//                     Edit
//                   </Button>
//                   <Button onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-700">
//                     Delete
//                   </Button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
