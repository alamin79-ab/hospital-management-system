'use client'

import { Plus, Users, Bed } from 'lucide-react'

const wards = [
  { id: 1, name: 'Cardiac Care Unit', beds: 20, occupied: 18, type: 'ICU' },
  { id: 2, name: 'General Ward A', beds: 30, occupied: 25, type: 'General' },
  { id: 3, name: 'Pediatrics Ward', beds: 15, occupied: 12, type: 'Specialized' },
]

export default function WardsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Wards</h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Ward
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wards.map((ward) => (
          <div key={ward.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-4">{ward.name}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <Bed className="w-4 h-4 mr-2" />
                  Total Beds
                </span>
                <span className="font-semibold text-gray-800">{ward.beds}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Occupied
                </span>
                <span className="font-semibold text-gray-800">{ward.occupied}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Type</span>
                <span className="font-semibold text-gray-800">{ward.type}</span>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(ward.occupied / ward.beds) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
