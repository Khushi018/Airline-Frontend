import React from 'react';
import { Plane, Users, CreditCard, AlertTriangle } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Plane className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">+12.5%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">1,284</h3>
          <p className="text-gray-600">Active Flights</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+8.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">12,454</h3>
          <p className="text-gray-600">Total Users</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-purple-600">+15.8%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">$284,545</h3>
          <p className="text-gray-600">Monthly Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <span className="text-sm font-medium text-red-600">-2.4%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">24</h3>
          <p className="text-gray-600">Cancelled Flights</p>
        </div>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
            <select className="border rounded-md px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {[65, 45, 78, 52, 63, 43, 57].map((height, index) => (
              <div key={index} className="flex-1">
                <div 
                  className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
            <button className="text-blue-600 text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((booking) => (
              <div key={booking} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Plane className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">JFK → LAX</p>
                    <p className="text-sm text-gray-600">John Doe</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$299</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;