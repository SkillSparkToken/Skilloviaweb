import React from 'react';

const Security = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fce8]">
      <div className="w-full max-w-md px-4">
        <button className="text-gray-700 text-lg font-medium mb-4">
          ← Security
        </button>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-gray-800 font-medium text-lg">Password</h2>
          <div className="flex items-start gap-3">
            {/* Success Icon */}
            <div className="mt-1 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* Success Message */}
            <div className="flex-1">
              <p className="text-gray-800 font-medium">Password has been set</p>
              <p className="text-gray-600 text-sm">
                You changed your password to a more stronger one
              </p>
            </div>
            {/* Edit Icon */}
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-1.036a2.5 2.5 0 113.536 3.536l-9.192 9.192a2 2 0 01-.879.515l-5.197 1.04a1 1 0 01-1.213-1.213l1.04-5.197a2 2 0 01.515-.879l9.192-9.192z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
