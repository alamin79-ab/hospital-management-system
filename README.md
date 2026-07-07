# Barrah Rilwan Specialist Hospital Management System

A comprehensive hospital management system built with Next.js and React for managing patient records, appointments, doctors, wards, pharmacy inventory, and billing.

## Features

- **Dashboard**: Overview of hospital statistics and recent activities
- **Patient Management**: Add, view, and manage patient records
- **Appointments**: Schedule and track patient appointments
- **Doctors**: Manage doctor profiles and availability
- **Wards**: Track ward capacity and occupancy
- **Pharmacy**: Manage medicine inventory and stock levels
- **Billing**: Create and track patient bills

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Icons**: Lucide React
- **State Management**: Zustand
- **Date Handling**: Date-fns
- **HTTP Client**: Axios

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── patients/
│   ├── appointments/
│   ├── doctors/
│   ├── wards/
│   ├── pharmacy/
│   └── billing/
├── components/
│   ├── Dashboard.js
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Patients/
│   ├── Appointments/
│   ├── Doctors/
│   ├── Wards/
│   ├── Pharmacy/
│   └── Billing/
├── context/
│   └── AuthContext.js
├── styles/
│   └── globals.css
└── public/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
