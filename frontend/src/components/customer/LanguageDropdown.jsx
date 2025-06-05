import React from 'react'

export default function LanguageDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="p-2 border rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    >
      <option value="hindi">Hindi</option>
      <option value="telugu">Telugu</option>
    </select>
  )
}