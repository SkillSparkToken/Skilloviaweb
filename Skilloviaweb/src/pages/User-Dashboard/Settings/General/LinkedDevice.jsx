import React from 'react';
import { ArrowLeft, Monitor, Smartphone } from 'lucide-react';

const LinkedDevices = () => {
  return (
    <div className="min-h-screen bg-[#f9fdf3] p-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Linked Devices</h1>
      </div>

      {/* Devices */}
      <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
        {/* This Device */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Smartphone className="w-6 h-6 text-gray-500" />
            <div>
              <h2 className="font-medium text-gray-900">This device (SM-938374)</h2>
              <p className="text-sm text-gray-500">Android</p>
              <p className="text-sm text-gray-400">Lagos, Nigeria • Active now</p>
            </div>
          </div>
        </div>

        {/* Other Device */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Monitor className="w-6 h-6 text-gray-500" />
            <div>
              <h2 className="font-medium text-gray-900">Chrome 105</h2>
              <p className="text-sm text-gray-500">Mac</p>
              <p className="text-sm text-gray-400">Lagos, Nigeria • 5h ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sign-Out Link */}
      <div className="mt-4">
        <button className="text-red-500 hover:underline">
          Sign Out From All Other Devices
        </button>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default LinkedDevices;
