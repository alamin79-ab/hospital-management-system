'use client'

import { Plus, Pill, AlertCircle } from 'lucide-react'

const medicines = [
  { id: 1, name: 'Paracetamol', quantity: 500, unit: 'tablets', price: '$5.99', status: 'In Stock' },
  { id: 2, name: 'Amoxicillin', quantity: 200, unit: 'capsules', price: '$12.50', status: 'Low Stock' },
  { id: 3, name: 'Ibuprofen', quantity: 1000, unit: 'tablets', price: '$8.99', status: 'In Stock' },
]

export default function PharmacyList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Pharmacy</h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Medicine
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700">Medicine Name</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Quantity</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Unit Price</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {medicines.map((medicine) => (
                <tr key={medicine.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center">
                    <Pill className="w-4 h-4 mr-2 text-primary" />
                    {medicine.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{medicine.quantity} {medicine.unit}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">{medicine.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                      medicine.status === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {medicine.status === 'Low Stock' && <AlertCircle className="w-3 h-3 mr-1" />}
                      {medicine.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
