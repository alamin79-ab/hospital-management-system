'use client'

import { Plus, Mail, Phone } from 'lucide-react'

const doctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', experience: '12 years', status: 'Available' },
  { id: 2, name: 'Dr. Ahmed Ali', specialty: 'Neurology', experience: '8 years', status: 'Busy' },
  { id: 3, name: 'Dr. Maria Garcia', specialty: 'Pediatrics', experience: '15 years', status: 'Available' },
]

export default function DoctorsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Doctors</h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Doctor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                doctor.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {doctor.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Experience: {doctor.experience}</p>
            <div className="flex space-x-4">
              <button className="flex-1 flex items-center justify-center bg-blue-100 text-blue-600 py-2 rounded hover:bg-blue-200">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
              <button className="flex-1 flex items-center justify-center bg-green-100 text-green-600 py-2 rounded hover:bg-green-200">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
