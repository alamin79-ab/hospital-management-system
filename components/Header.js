'use client'

import { Bell, Settings, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800">Barrah Rilwan Specialist Hospital</h2>
        <div className="flex items-center space-x-6">
          <button className="relative p-2 text-gray-600 hover:text-gray-900">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Settings className="w-6 h-6" />
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </button>
        </div>
      </div>
    </header>
  )
}
