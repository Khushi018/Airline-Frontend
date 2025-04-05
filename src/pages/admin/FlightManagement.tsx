import React, { useState } from 'react';
import { Plane, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useGetFlightQuery } from '../../features/flightApiSlice';

const FlightManagement = () => {
  const [showAddFlight, setShowAddFlight] = useState(false);
   const { data, error } = useGetFlightQuery({});

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Flight Management</h1>
          <p className="text-gray-600">Manage all flights and schedules</p>
        </div>
        <button
          onClick={() => setShowAddFlight(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Flight</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search flights..."
              className="pl-10 w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <select className="w-full p-3 border rounded-md">
              <option>All Airlines</option>
              <option>American Airlines</option>
              <option>Delta</option>
              <option>United</option>
            </select>
          </div>
          <div>
            <select className="w-full p-3 border rounded-md">
              <option>All Status</option>
              <option>Active</option>
              <option>Cancelled</option>
              <option>Delayed</option>
            </select>
          </div>
          <button className="flex items-center justify-center space-x-2 bg-gray-100 p-3 rounded-md hover:bg-gray-200">
            <Filter className="h-5 w-5" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Flights Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Flight Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Schedule
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Capacity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {data?.map((flight: any) => (
              <tr key={flight.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Plane className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{flight.flightNumber}</div>
                      <div className="text-sm text-gray-500">{flight.airlineName}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4"> 
                  <div className="text-sm text-gray-900">{flight.departureAirport.airportCode} → {flight.arrivalAirport.airportCode} </div>
                  <div className="text-sm text-gray-500">{flight.departureTime} → {flight.arrivalTime}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{flight.availableSeats}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                {flight.price}
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Flight Modal */}
      {showAddFlight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-6">Add New Flight</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flight Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="AA123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Airline
                  </label>
                  <select className="w-full p-3 border rounded-md">
                    <option>American Airlines</option>
                    <option>Delta</option>
                    <option>United</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Departure
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="JFK"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arrival
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md"
                    placeholder="LAX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-md"
                    placeholder="299"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowAddFlight(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Add Flight
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default FlightManagement;