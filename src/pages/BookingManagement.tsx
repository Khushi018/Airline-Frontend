import React from 'react';
import { Plane, Calendar, Clock, Download } from 'lucide-react';

const BookingManagement = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

      <div className="space-y-6">
        {/* Upcoming Bookings */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-blue-50 border-b">
            <h2 className="text-lg font-semibold text-blue-900">Upcoming Trips</h2>
          </div>
          
          <div className="divide-y">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Plane className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">New York (JFK) → London (LHR)</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">March 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">08:00 AM</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-start space-x-4">
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    E-Ticket
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Manage
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Plane className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold">London (LHR) → New York (JFK)</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">March 22, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">10:30 AM</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                  </div>
                 </div>
                
                <div className="mt-4 md:mt-0 flex items-start space-x-4">
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Download className="h-5 w-5 mr-1" />
                    E-Ticket
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Bookings */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Past Trips</h2>
          </div>
          
          <div className="divide-y">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Plane className="h-5 w-5 text-gray-600 mr-2" />
                    <h3 className="font-semibold">Los Angeles (LAX) → Chicago (ORD)</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">February 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">02:15 PM</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <button className="flex items-center text-gray-600 hover:text-gray-700">
                    <Download className="h-5 w-5 mr-1" />
                    E-Ticket
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Plane className="h-5 w-5 text-gray-600 mr-2" />
                    <h3 className="font-semibold">Chicago (ORD) → Miami (MIA)</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">January 28, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">11:45 AM</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <button className="flex items-center text-gray-600 hover:text-gray-700">
                    <Download className="h-5 w-5 mr-1" />
                    E-Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;