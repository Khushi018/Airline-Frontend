import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FlightSearch from './pages/FlightSearch';
import FlightDetails from './pages/FlightDetails';
import BookingManagement from './pages/BookingManagement';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminFlightManagement from './pages/admin/FlightManagement';
import AdminBookingManagement from './pages/admin/BookingManagement';
import AdminUserManagement from './pages/admin/UserManagement';
import AdminRevenue from './pages/admin/Revenue';
import AdminSettings from './pages/admin/Settings';
import Airport from './pages/admin/AirportManagement';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Only show Navbar on non-admin routes */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<FlightSearch />} />
            <Route path="/flight/:id" element={<FlightDetails />} />
            <Route path="/bookings" element={<BookingManagement />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/airports" element={<Airport />} />
            <Route path="/admin/flights" element={<AdminFlightManagement />} />
            <Route path="/admin/bookings" element={<AdminBookingManagement />} />
            <Route path="/admin/users" element={<AdminUserManagement />} />
            <Route path="/admin/revenue" element={<AdminRevenue />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Routes>
        </main>

        {/* Only show Footer on non-admin routes */}
        <Routes>
          <Route path="/admin/*" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;