'use client'

export default function RecentActivity() {
  const activities = [
    { id: 1, type: 'New Patient', description: 'John Doe registered', time: '2 hours ago' },
    { id: 2, type: 'Appointment', description: 'Dr. Sarah scheduled consultation', time: '1 hour ago' },
    { id: 3, type: 'Discharge', description: 'Patient Maria discharged', time: '30 minutes ago' },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-3">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="font-medium text-gray-800">{activity.type}</p>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
