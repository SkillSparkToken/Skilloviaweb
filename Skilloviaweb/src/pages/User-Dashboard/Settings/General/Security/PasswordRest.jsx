import React, { useState } from 'react';

const PasswordReset = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = (field) => {
    if (field === 'old') setShowOldPassword(!showOldPassword);
    if (field === 'new') setShowNewPassword(!showNewPassword);
    if (field === 'confirm') setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fce8]">
      <div className="w-full max-w-md px-4">
        <button className="text-gray-700 text-lg font-medium mb-4">
          ← Password Reset
        </button>
        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
          {/* Old Password */}
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">Old Password</label>
            <input
              type={showOldPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
              onClick={() => handlePasswordToggle('old')}
            >
              👁️
            </button>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">New Password</label>
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
              onClick={() => handlePasswordToggle('new')}
            >
              👁️
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 text-sm mb-1">Confirm New Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500"
              onClick={() => handlePasswordToggle('confirm')}
            >
              👁️
            </button>
          </div>

          {/* Save Changes Button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
