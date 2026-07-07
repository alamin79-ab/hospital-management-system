'use client'

import { useState } from 'react'
import { Calendar, Plus, Clock } from 'lucide-react'

const appointments = [
  { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah', time: '10:00 AM', date: '2024-07-10', status: 'Confirmed' },
  { id: 2, patient: 'Jane Smith', doctor: 'Dr. Ahmed', time: '2:30 PM', date: '2024-07-10', status: 'Pending' },
  { id: 3, patient: 'Ahmed Hassan', doctor: 'Dr. Maria', time: '4:00 PM', date: '2024-07-10', status: 'Confirmed' },
]

export default function AppointmentsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Appointment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {appointments.map((apt) => (
            <div key={apt.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-white p-3 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{apt.patient}</p>
                  <p className="text-sm text-gray-500">with {apt.doctor}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{apt.date}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {apt.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  apt.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {apt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
