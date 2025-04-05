import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">JetLite</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/search" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              Find Flights
            </Link>
            <Link to="/bookings" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              My Bookings
            </Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
              <User className="h-5 w-5 mr-1" />
              Sign In
            </Link>
          </div>

          <div className="sm:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;