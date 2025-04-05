import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, Plane, Shield, Gift, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Explore the World",
    subtitle: "Your journey begins with us"
  },
  {
    image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Travel",
    subtitle: "Experience premium comfort"
  },
  {
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    title: "Adventure Awaits",
    subtitle: "Discover new horizons"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <div className="relative">
      {/* Hero Section with Slider */}
      <div className="relative h-[400px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-blue-900/70" />
              <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />b 
          ))}
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-5xl mx-auto px-4 -mt-24 relative z-10">
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                <input
                  type="text"
                  placeholder="Departure City"
                  className="pl-10 w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <input
                  type="text"
                  placeholder="Arrival City"
                  className="pl-10 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-red-500" />
                <input
                  type="date"
                  className="pl-10 w-full p-3 border rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <select
                  className="pl-10 w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4+ Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 px-6 rounded-md hover:from-red-700 hover:to-blue-700 flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Search className="h-5 w-5" />
            Search Flights
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200 transition-all duration-300">
              <Plane className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Flights</h3>
            <p className="text-gray-600">Handpicked flights with best prices and comfort</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200 transition-all duration-300">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">100% secure payment and booking protection</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200 transition-all duration-300">
              <Gift className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
            <p className="text-gray-600">Regular discounts and exclusive deals</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-red-100 to-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200 transition-all duration-300">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer assistance</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-gradient-to-r from-red-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="New York"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">New York</h3>
                  <p>Starting from $299</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="London"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">London</h3>
                  <p>Starting from $499</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dubai"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">Dubai</h3>
                  <p>Starting from $599</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;