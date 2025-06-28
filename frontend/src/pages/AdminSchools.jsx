import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminSchools() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/schools').then(res => {
      setSchools(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading schools…</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Manage Schools</h2>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {['ID','Name','Phone','Code','Active','Actions'].map(col => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {schools.map(s => (
              <tr key={s.id}>
                <td className="px-6 py-4 whitespace-nowrap">{s.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.phonenumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.code}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {s.isactive ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="px-3 py-1 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
