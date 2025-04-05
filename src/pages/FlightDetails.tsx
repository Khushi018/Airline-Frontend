import React from 'react';
import { Plane, Clock, Users, Luggage, Coffee } from 'lucide-react';

const FlightDetails = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Flight Summary */}
        <div className="bg-blue-600 text-white p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">New York (JFK) → Los Angeles (LAX)</h1>
              <p className="text-blue-100">American Airlines • Flight AA123</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-3xl font-bold">$299</p>
              <p className="text-blue-100">per passenger</p>
            </div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold mb-4">Flight Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-gray-600">5h 30m</p>
              </div>
            </div>
            <div className="flex items-center">
              <Plane className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Aircraft</p>
                <p className="text-gray-600">Boeing 737</p>
              </div>
            </div>
            <div className="flex items-center">
              <Luggage className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Baggage</p>
                <p className="text-gray-600">1 × 23kg</p>
              </div>
            </div>
            <div className="flex items-center">
              <Coffee className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">Meal</p>
                <p className="text-gray-600">Included</p>
              </div>
            </div>
          </div>
        </div>

        {/* Passenger Information */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold mb-4">Passenger Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Passport Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold mb-4">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Extra Baggage</h3>
                  <p className="text-sm text-gray-600">Add 23kg checked bag</p>
                </div>
                <p className="font-semibold">$30</p>
              </div>
              <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Add
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Priority Boarding</h3>
                  <p className="text-sm text-gray-600">Board first</p>
                </div>
                <p className="font-semibold">$15</p>
              </div>
              <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Add
              </button>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Travel Insurance</h3>
                  <p className="text-sm text-gray-600">Full coverage</p>
                </div>
                <p className="font-semibold">$20</p>
              </div>
              <button className="mt-4 w-full bg-gray-100 text-gray-800 py-2 rounded-md hover:bg-gray-200">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Total Price</h2>
            <p className="text-3xl font-bold text-blue-600">$299</p>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;