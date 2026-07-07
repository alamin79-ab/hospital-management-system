import '../styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'Barrah Rilwan Specialist Hospital Management System',
  description: 'Hospital Management System for Barrah Rilwan Specialist Hospital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <main className="flex-1 overflow-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
