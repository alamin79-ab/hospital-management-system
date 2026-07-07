'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Users,
  Calendar,
  Stethoscope,
  Building2,
  Pill,
  FileText,
  LogOut,
} from 'lucide-react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Users, label: 'Patients', href: '/patients' },
  { icon: Calendar, label: 'Appointments', href: '/appointments' },
  { icon: Stethoscope, label: 'Doctors', href: '/doctors' },
  { icon: Building2, label: 'Wards', href: '/wards' },
  { icon: Pill, label: 'Pharmacy', href: '/pharmacy' },
  { icon: FileText, label: 'Billing', href: '/billing' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-primary text-white shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold">Barrah Rilwan Specialist Hospital</h1>
        <p className="text-sm text-blue-200 mt-1">Management System</p>
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 transition-colors ${
                isActive
                  ? 'bg-secondary text-white border-l-4 border-white'
                  : 'text-blue-100 hover:bg-blue-700'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
          <LogOut className="w-4 h-4 mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
