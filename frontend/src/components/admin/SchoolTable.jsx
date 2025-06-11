
// // Table and form to manage schools; wired to admin.js service calls

// import React, { useEffect, useState } from 'react'
// import { getSchools, addSchool, updateSchool, deleteSchool } from '../../services/admin'
// import Input from '..auth/common/Input'
// import Button from '..auth/common/Button'

// export default function SchoolTable() {
//   const [schools, setSchools] = useState([])
//   const [newName, setNewName] = useState('')
//   const [newPhone, setNewPhone] = useState('')
//   const [newCode, setNewCode] = useState('')
//   const [error, setError] = useState('')

//   // Fetch all schools on mount
//   useEffect(() => {
//     fetchSchools()
//   }, [])

//   const fetchSchools = async () => {
//     try {
//       const { data } = await getSchools()
//       setSchools(data)
//       setError('')
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to load schools')
//     }
//   }

//   const handleAdd = async () => {
//     try {
//       await addSchool({ name: newName, phonenumber: newPhone, code: newCode })
//       setNewName('')
//       setNewPhone('')
//       setNewCode('')
//       fetchSchools()
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to add school')
//     }
//   }

//   const handleDelete = async id => {
//     try {
//       await deleteSchool(id)
//       fetchSchools()
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to delete school')
//     }
//   }

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold mb-4">Manage Schools</h1>
//       {error && <div className="text-red-500 mb-2">{error}</div>}

//       {/* Add New School Form */}
//       <div className="mb-6 space-y-2">
//         <Input
//           type="text"
//           placeholder="Name"
//           value={newName}
//           onChange={e => setNewName(e.target.value)}
//           className="w-1/3"
//         />
//         <Input
//           type="text"
//           placeholder="Phone"
//           value={newPhone}
//           onChange={e => setNewPhone(e.target.value)}
//           className="w-1/3"
//         />
//         <Input
//           type="text"
//           placeholder="Code"
//           value={newCode}
//           onChange={e => setNewCode(e.target.value)}
//           className="w-1/3"
//         />
//         <Button onClick={handleAdd}>Add School</Button>
//       </div>

//       {/* Schools Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-md overflow-hidden shadow">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="px-4 py-2">ID</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Phone</th>
//               <th className="px-4 py-2">Code</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {schools.map(school => (
//               <tr key={school.id} className="border-t">
//                 <td className="px-4 py-2">{school.id}</td>
//                 <td className="px-4 py-2">{school.name}</td>
//                 <td className="px-4 py-2">{school.phonenumber}</td>
//                 <td className="px-4 py-2">{school.code}</td>
//                 <td className="px-4 py-2 space-x-2">
//                   <Button
//                     onClick={() => handleDelete(school.id)}
//                     className="bg-red-600 hover:bg-red-700"
//                   >
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
