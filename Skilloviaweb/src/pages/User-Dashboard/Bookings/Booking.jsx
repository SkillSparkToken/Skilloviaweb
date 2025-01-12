import React, { useState } from 'react';
import UserLayout from '../UserLayout/UserLayout';

const BookingCard = ({ title, description, date, status }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4 cursor-pointer hover:bg-gray-50 transition-colors">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
        <img 
          src="/api/placeholder/48/48"
          alt="AC Unit Icon"
          className="w-8 h-8"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            {status}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('inward');

  const inwardBookings = [
    {
      title: "AC Unit Repair",
      description: "This is a booking description for this particular card. You can click on this card to view this in extension.",
      date: "23 Sept, 2022 - 12:39 AM",
      status: "Active"
    },
    {
      title: "AC Unit Repair",
      description: "This is a booking description for this particular card. You can click on this card to view this in extension.",
      date: "23 Sept, 2022 - 12:39 AM",
      status: "Active"
    }
  ];

  const outwardBookings = [
    {
      title: "Window Cleaning",
      description: "Regular maintenance window cleaning service.",
      date: "24 Sept, 2022 - 2:00 PM",
      status: "Active"
    }
  ];

  const TabButton = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`pb-2 font-medium border-b-2 transition-colors ${
        activeTab === id
          ? 'text-green-600 border-green-600'
          : 'text-gray-400 border-transparent hover:text-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <UserLayout>

   
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Bookings</h2>
      
      <div className="flex gap-8 mb-6">
        <TabButton id="inward" label="Inward Bookings" />
        <TabButton id="outward" label="Outward Bookings" />
      </div>

      <div>
        {activeTab === 'inward' && inwardBookings.map((booking, index) => (
          <BookingCard
            key={`inward-${index}`}
            title={booking.title}
            description={booking.description}
            date={booking.date}
            status={booking.status}
          />
        ))}
        {activeTab === 'outward' && outwardBookings.map((booking, index) => (
          <BookingCard
            key={`outward-${index}`}
            title={booking.title}
            description={booking.description}
            date={booking.date}
            status={booking.status}
          />
        ))}
      </div>
    </div>
    </UserLayout>
  );
};

export default Bookings;