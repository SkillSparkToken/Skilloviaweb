import React, { useState } from 'react';
import { Pencil, Check, X, Loader } from 'lucide-react';

const EditableProfile = ({ initialBio }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    bio: initialBio || '',
    location: '',
    street: '',
    zip_code: ''
  });

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const accessToken = localStorage.getItem('accessToken');
      
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/profile/update/bio`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Failed to update profile');
      }

      setIsEditing(false);
    } catch (error) {
      console.error('Profile update failed:', {
        timestamp: new Date().toISOString(),
        error: error.message,
        formData,
        stack: error.stack
      });
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setError(null);
    setFormData(prev => ({
      ...prev,
      bio: initialBio || ''
    }));
  };

  if (isEditing) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="font-semibold">Edit Profile</div>
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              disabled={isLoading}
              className="text-green-500 hover:text-green-600 disabled:opacity-50"
            >
              {isLoading ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <Check className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="text-red-500 hover:text-red-600 disabled:opacity-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="space-y-3">
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
            className="w-full p-2 text-sm text-gray-600 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="Write your bio..."
            rows={3}
            disabled={isLoading}
          />

          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="w-full p-2 text-sm text-gray-600 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="Location"
            disabled={isLoading}
          />

          <input
            type="text"
            value={formData.street}
            onChange={(e) => setFormData(prev => ({ ...prev, street: e.target.value }))}
            className="w-full p-2 text-sm text-gray-600 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="Street"
            disabled={isLoading}
          />

          <input
            type="text"
            value={formData.zip_code}
            onChange={(e) => setFormData(prev => ({ ...prev, zip_code: e.target.value }))}
            className="w-full p-2 text-sm text-gray-600 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
            placeholder="ZIP Code"
            disabled={isLoading}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold">Bio & Location</div>
        <button
          onClick={() => setIsEditing(true)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Pencil className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-gray-600">
        {formData.bio || "No bio available"}
      </p>
      {formData.location && (
        <p className="text-sm text-gray-500 mt-1">
          {formData.location}
        </p>
      )}
    </div>
  );
};

export default EditableProfile;