import React from 'react';
import { Plane, Calendar, CreditCard, User } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-blue-100 rounded-full p-3">
              <Plane className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Flights</h2>
              <p className="text-3xl font-bold text-blue-600">2</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-green-100 rounded-full p-3">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Past Trips</h2>
              <p className="text-3xl font-bold text-green-600">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full p-3">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Reward Points</h2>
              <p className="text-3xl font-bold text-purple-600">2,450</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="bg-orange-100 rounded-full p-3">
              <User className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Member Status</h2>
              <p className="text-xl font-semibold text-orange-600">Gold</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Flights</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">New York (JFK) → London (LHR)</p>
              <p className="text-gray-600">March 15, 2024 • Flight AB123</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold text-gray-900">London (LHR) → New York (JFK)</p>
              <p className="text-gray-600">March 22, 2024 • Flight AB124</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-2">
                <Plane className="h-4 w-4 text-green-600" />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Booking Confirmed</p>
                <p className="text-sm text-gray-600">Flight AB123 • March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2">
                <CreditCard className="h-4 w-4 text-purple-600" />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Points Earned</p>
                <p className="text-sm text-gray-600">+250 points • February 28, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;