import React from 'react';
import { CreditCard, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const Revenue = () => {
  const revenueData = {
    totalRevenue: '$1,234,567',
    monthlyRevenue: '$284,545',
    averageBookingValue: '$299',
    revenueGrowth: '+15.8%'
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Revenue Analytics</h1>
        <p className="text-gray-600">Financial overview and analytics</p>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-green-600">+12.5%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{revenueData.totalRevenue}</h3>
          <p className="text-gray-600">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">+8.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{revenueData.monthlyRevenue}</h3>
          <p className="text-gray-600">Monthly Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-purple-600">+5.3%</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{revenueData.averageBookingValue}</h3>
          <p className="text-gray-600">Avg. Booking Value</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-orange-600">{revenueData.revenueGrowth}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">15.8%</h3>
          <p className="text-gray-600">Growth Rate</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
          <select className="border rounded-md px-3 py-1 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="h-80">
          <div className="h-64 flex items-end space-x-2">
            {[65, 45, 78, 52, 63, 43, 57, 65, 45, 78, 52, 63].map((height, index) => (
              <div key={index} className="flex-1">
                <div 
                  className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-600">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>

      {/* Revenue Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Source</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Direct Bookings</span>
              </div>
              <span className="font-medium">65%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Partner Airlines</span>
              </div>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span>Travel Agents</span>
              </div>
              <span className="font-medium">10%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((transaction) => (
              <div key={transaction} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Booking #{transaction}234</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+$299</p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Revenue;