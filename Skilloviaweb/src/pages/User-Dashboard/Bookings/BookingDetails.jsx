import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../UserLayout/UserLayout';
import { Loader2, Calendar, MapPin, Clock, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { format } from 'date-fns';

const BookingDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      setLoading(true);
      setError(null);
      const accessToken = localStorage.getItem('accessToken');

      try {
        const response = await fetch(`https://testapi.humanserve.net/api/bookings/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch booking details');
        }

        const data = await response.json();
        setBooking(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [id]);

  if (loading) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center h-screen">
          <Loader2 className="animate-spin w-12 h-12 text-secondary" />
        </div>
      </UserLayout>
    );
  }

  if (error) {
    return (
      <UserLayout>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center py-8 text-red-500">
            Error loading booking details: {error}
          </div>
        </div>
      </UserLayout>
    );
  }

  if (!booking) {
    return (
      <UserLayout>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center py-8 text-gray-500">
            Booking not found
          </div>
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Header Section */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-semibold mb-2">{booking.title}</h1>
                <div className="flex items-center gap-2 text-gray-600">
                  {booking.type === 'outward' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownLeft className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {booking.type === 'outward' ? 'Outward' : 'Inward'} Booking
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 text-sm rounded-lg ${
                booking.status === 'accepted' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>
          </div>

          {/* Image Section */}
          <div className="p-6 border-b">
            <img
              src={`https://${booking.file_url}`}
              alt="Booking"
              className="w-full h-64 rounded-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Details</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{format(new Date(booking.booking_date), 'MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{format(new Date(booking.booking_date), 'h:mm a')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.booking_location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="text-gray-600">{booking.description}</p>
              </div>
            </div>

            {/* Additional Details Section */}
            {booking.additional_details && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm text-gray-600">
                    {booking.additional_details}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default BookingDetails;