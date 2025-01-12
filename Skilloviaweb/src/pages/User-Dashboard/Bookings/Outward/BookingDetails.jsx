import React from 'react';

const BookingDetails = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-2 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">Booking Details</h1>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
            <img src="/api/placeholder/48/48" alt="Booking Icon" className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-600">This is a booking description for this particular card. You can click on this card to view this in extension.</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">23 Sept, 2022 - 12:39 AM</span>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium mb-4">Contact your technician</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/api/placeholder/40/40" alt="Technician" className="w-10 h-10 rounded-full" />
              <span className="font-medium">Abdulmalik Qasim</span>
            </div>
            <button className="text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2">Location</h2>
          <p className="text-sm text-gray-600 mb-2">3329 Joyce St</p>
          <div className="bg-gray-100 h-48 rounded-lg mb-4">
            <img src="/api/placeholder/600/200" alt="Map" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2">Title</h2>
          <p className="text-sm text-gray-600">Dolores qui quio vel officiis accusantium eum dolores aut. Eum molestiae qui blanditiis est quia commodi maxime sed quia. Aut mollitia et. Maxime dolores qui voluptas distinctio in...</p>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2">Message</h2>
          <p className="text-sm text-gray-600">Dolores qui quio vel officiis accusantium eum dolores aut. Eum molestiae qui blanditiis est quia commodi maxime sed quia. Aut mollitia et. Maxime dolores qui voluptas distinctio in...</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Booking ID</span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">485748564957479</span>
            <button className="text-green-600 text-sm">Copy</button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Payment method</span>
          <span className="text-sm text-gray-600">Exchange for Dog walking</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Price</span>
          <span className="text-sm text-gray-600">£10,000</span>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;