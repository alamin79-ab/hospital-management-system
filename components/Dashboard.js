'use client'

import { Activity, Users, Calendar, TrendingUp } from 'lucide-react'
import StatCard from './StatCard'
import RecentActivity from './RecentActivity'

const stats = [
  {
    title: 'Total Patients',
    value: '1,234',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    title: 'Appointments Today',
    value: '28',
    icon: Calendar,
    color: 'bg-green-500',
  },
  {
    title: 'Active Doctors',
    value: '45',
    icon: Activity,
    color: 'bg-purple-500',
  },
  {
    title: 'Revenue',
    value: '$45,230',
    icon: TrendingUp,
    color: 'bg-orange-500',
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity />
      </div>
    </div>
  )
}
