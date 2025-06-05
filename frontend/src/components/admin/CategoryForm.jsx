// Form and table to manage categories; wired to admin.js service calls
import React, { useEffect, useState } from 'react'
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from '../../services/admin'
import Input from '..auth/common/Input'
import Button from '..auth/common/Button'

export default function CategoryForm() {
  const [categories, setCategories] = useState([])
  const [newName, setNewName] = useState('')
  const [newCode, setNewCode] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingName, setEditingName] = useState('')
  const [editingCode, setEditingCode] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories()
      setCategories(data)
      setError('')
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to load categories')
    }
  }

  const handleAdd = async () => {
    try {
      await addCategory({ catname: newName, catcode: newCode })
      setNewName('')
      setNewCode('')
      fetchCategories()
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to add category')
    }
  }

  const startEdit = category => {
    setEditingId(category.id)
    setEditingName(category.catname)
    setEditingCode(category.catcode)
  }

  const handleUpdate = async () => {
    try {
      await updateCategory(editingId, { catname: editingName, catcode: editingCode })
      setEditingId(null)
      setEditingName('')
      setEditingCode('')
      fetchCategories()
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to update')
    }
  }

  const handleDelete = async id => {
    try {
      await deleteCategory(id)
      fetchCategories()
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to delete')
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Manage Categories</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}

      {/* Add New Category */}
      <div className="mb-6 space-y-2">
        <Input
          type="text"
          placeholder="Category Name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          className="w-1/3"
        />
        <Input
          type="text"
          placeholder="Category Code"
          value={newCode}
          onChange={e => setNewCode(e.target.value)}
          className="w-1/3"
        />
        <Button onClick={handleAdd}>Add Category</Button>
      </div>

      {/* Categories Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-md overflow-hidden shadow">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id} className="border-t">
                <td className="px-4 py-2">{category.id}</td>
                <td className="px-4 py-2">
                  {editingId === category.id ? (
                    <Input
                      type="text"
                      value={editingName}
                      onChange={e => setEditingName(e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    category.catname
                  )}
                </td>
                <td className="px-4 py-2">
                  {editingId === category.id ? (
                    <Input
                      type="text"
                      value={editingCode}
                      onChange={e => setEditingCode(e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    category.catcode
                  )}
                </td>
                <td className="px-4 py-2 space-x-2">
                  {editingId === category.id ? (
                    <Button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700">
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => startEdit(category)} className="bg-yellow-500 hover:bg-yellow-600">
                      Edit
                    </Button>
                  )}
                  <Button onClick={() => handleDelete(category.id)} className="bg-red-600 hover:bg-red-700">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
