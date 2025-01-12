import React from 'react';

const BookingHeader = ({ date, description }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-6">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
        <img src="/api/placeholder/48/48" alt="Booking Icon" className="w-8 h-8" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Active
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ProgressStep = ({ title, date, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'bg-gray-200';
      case 'inProgress': return 'bg-gray-200';
      case 'confirmed': return 'bg-green-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <div className="flex items-start gap-4 mb-6">
      <div className={`w-3 h-3 rounded-full mt-1.5 ${getStatusColor()}`} />
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      {status === 'inProgress' && (
        <div className="text-green-600 text-sm">View Details</div>
      )}
    </div>
  );
};

const BookingProgress = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Booking Progress</h1>
        </div>
        <button className="text-green-600 text-sm">Share details</button>
      </div>

      <BookingHeader 
        date="23 Sept, 2022 - 12:39 AM"
        description="This is a booking description for this particular card. You can click on this card to view this in extension."
      />

      <div className="mb-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-medium">Progress</h2>
        </div>

        <ProgressStep
          title="Service completed"
          date="April 19, 2012 3:30 PM"
          status="completed"
        />
        <ProgressStep
          title="Service in progress"
          date="March 11, 2016 11:08 PM"
          status="inProgress"
        />
        <ProgressStep
          title="Booking request confirmed"
          date="November 19, 2012 4:50 AM"
          status="confirmed"
        />
        <ProgressStep
          title="Booking request sent"
          date="November 19, 2012 4:50 AM"
          status="confirmed"
        />
        <ProgressStep
          title="Payment confirmed"
          date="November 19, 2012 4:50 AM"
          status="confirmed"
        />
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-green-400 text-white py-3 rounded-lg hover:bg-green-500 transition-colors">
          Confirm completion
        </button>
        <button className="flex-1 bg-red-100 text-red-600 py-3 rounded-lg hover:bg-red-200 transition-colors">
          Open dispute
        </button>
      </div>
    </div>
  );
};

export default BookingProgress;