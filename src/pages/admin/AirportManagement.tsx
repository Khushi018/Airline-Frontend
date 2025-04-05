import React, { useState } from 'react';
import { Plane, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAddAirportMutation, useDeleteAirportMutation, useGetAirportQuery, useUpdateAirportMutation } from '../../features/airportApiSlice';

const Airport = () => {
    const [showAddAirport, setShowAddAirport] = useState(false);
    const [showUpdateAirport, setShowUpdateAirport] = useState(false);
    const [airportCode, setAirportCode] = useState("");
    const [airportId, setAirportId] = useState("");
    const [airportName, setAirportName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [addAirport, { isLoading }] = useAddAirportMutation();
    const [updateAirport, { isLoading: loading }] = useUpdateAirportMutation();
    const [deleteAirport, { isLoading: loadingd }] = useDeleteAirportMutation();
    const { data, error } = useGetAirportQuery({});

    const handleDeleteSubmit = async (e: any) => {
        console.log("Deleting airport with E:", e); // Debugging statement
        const isConfirmed = window.confirm("Are you sure you want to delete this airport?");
        
        if (!isConfirmed) return; // If the user cancels, do nothing
        console.log("Deleting airport with ID:", airportId); // Debugging statement

        if (!airportId) {
            alert("Error: Airport ID is missing!");
            return;
        }
    
    
        try {
            await deleteAirport({ id: airportId }).unwrap();
            alert("Airport deleted successfully!");
          
        } catch (error) {
            console.error("Error deleting airport:", error);
            alert("Failed to delete airport");
        }
    };
    

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newAirport = {
            airportCode,
            airportName,
            location,
            description,
        };
        try {
            await addAirport(newAirport).unwrap(); // API call
            alert("Airport added successfully!");
            setShowAddAirport(false); // Close modal
        } catch (error) {
            console.error("Error adding airport:", error);
            alert("Failed to add airport");
        }
    };
    const handleUpdateSubmit = async (e: any) => {
        e.preventDefault();
        const newAirport = {
            id: airportId, // Ensure id is passed
            airportCode,
            airportName,
            location,
            description,
        };
        try {
            await updateAirport({ newAirport, id: airportId }).unwrap();
            alert("Airport update successfully!");
            setShowAddAirport(false); // Close modal
        } catch (error) {
            console.error("Error update airport:", error);
            alert("Failed to add airport");
        }
    };

    if (isLoading) return <p>Loading...</p>;  // Show loading state
    if (error) {
        const errorMessage =
            'status' in error
                ? `Error: ${error.status}`
                : error.message || 'An unknown error occurred';
        return <p>{errorMessage}</p>;  // Show error if any
    }
    if (!data || data.length === 0) return <p>No Airports Found</p>;  // Handle empty data

    return (
        <AdminLayout>

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Airport Management</h1>
                    <p className="text-gray-600">Manage all Airports and schedules</p>
                </div>
                <button
                    onClick={() => setShowAddAirport(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700"
                >
                    <Plus className="h-5 w-5" />
                    <span>Add New Airport</span>
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
                            <option>All Airports</option>
                        </select>
                    </div>
                    <div>
                        <select className="w-full p-3 border rounded-md">
                            <option>All Status</option>
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
                                Airports Code
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Location
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {data?.map((airport: any) => (
                            <tr key={airport.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                                            <Plane className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="text-gray-900 text-sm">{airport.airportCode}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {airport.airportName}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    {airport.location}
                                </td>
                                <td className="px-6 py-4 text-right space-x-3">
                                    <button className="text-blue-600 hover:text-blue-900">
                                        <Edit onClick={() => {
                                            setShowUpdateAirport(true);
                                            setAirportCode(airport.airportCode);
                                            setAirportName(airport.airportName);
                                            setLocation(airport.location);
                                            setDescription(airport.description);
                                            setAirportId(airport.id); // Store airport ID for update
                                        }} className="h-5 w-5" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-900">
                                        <Trash2 onClick={(e) => { setAirportId(airport.id); handleDeleteSubmit(e); }} className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Flight Modal */}
            {showAddAirport && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                        <h2 className="text-2xl font-bold mb-6">Add New Airport</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Airport Code
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="AA123"
                                        value={airportCode}
                                        onChange={(e) => setAirportCode(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Airport Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Airport Name"
                                        value={airportName}
                                        onChange={(e) => setAirportName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="JFK, New York"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Airport description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="flex justify-end space-x-4">
                               
                                <button
                                    type="button"
                                    onClick={() => setShowAddAirport(false)}
                                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                > Cancel</button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    disabled={isLoading}
                                >
                                    Add Airport
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {/* Update Flight Modal */}
            {showUpdateAirport && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
                        <h2 className="text-2xl font-bold mb-6">Update Airport</h2>
                        <form className="space-y-6" onSubmit={handleUpdateSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Airport Code
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="AA123"
                                        value={airportCode}
                                        onChange={(e) => setAirportCode(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Airport Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Airport Name"
                                        value={airportName}
                                        onChange={(e) => setAirportName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="JFK, New York"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-3 border rounded-md"
                                        placeholder="Airport description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className="flex justify-end space-x-4">

                                <button
                                    type="button"
                                    onClick={() => setShowUpdateAirport(false)}
                                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                > Cancel</button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    disabled={isLoading}
                                >
                                    Update Airport
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </AdminLayout>
    );
};

export default Airport;