'use client'

import { Plus, DollarSign, FileText } from 'lucide-react'

const bills = [
  { id: 1, patient: 'John Doe', amount: '$1,250', date: '2024-07-05', status: 'Paid' },
  { id: 2, patient: 'Jane Smith', amount: '$890', date: '2024-07-06', status: 'Pending' },
  { id: 3, patient: 'Ahmed Hassan', amount: '$2,100', date: '2024-07-07', status: 'Paid' },
]

export default function BillingList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Billing</h1>
        <button className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Bill
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700">Patient</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Amount</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                <th className="px-6 py-3 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <tr key={bill.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800">{bill.patient}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-green-600" />
                    {bill.amount}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{bill.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      bill.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bill.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      View
                    </button>
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
