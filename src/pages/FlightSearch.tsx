import React from 'react';
import { Filter, ArrowRight } from 'lucide-react';

const FlightSearch = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 bg-white rounded-lg shadow-md p-6 h-fit">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Filter className="h-5 w-5 text-gray-500" />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="2000"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$2000</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Airlines</h3>
              <div className="space-y-2">
                {['American Airlines', 'Delta', 'United', 'British Airways'].map((airline) => (
                  <label key={airline} className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-sm text-gray-700">{airline}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Stops</h3>
              <div className="space-y-2">
                {['Non-stop', '1 Stop', '2+ Stops'].map((stop) => (
                  <label key={stop} className="flex items-center">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span className="ml-2 text-sm text-gray-700">{stop}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flight Results */}
        <div className="flex-1 space-y-4">
          {[1, 2, 3].map((flight) => (
            <div key={flight} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Airline Logo"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">American Airlines</h3>
                      <p className="text-sm text-gray-600">Flight AA123</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center space-x-4">
                    <div>
                      <p className="font-semibold">08:00</p>
                      <p className="text-sm text-gray-600">JFK</p>
                    </div>
                    <div className="flex-1 border-t-2 border-gray-300 relative">
                      <ArrowRight className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold">11:30</p>
                      <p className="text-sm text-gray-600">LAX</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-8 text-right">
                  <p className="text-2xl font-bold text-blue-600">$299</p>
                  <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearch;