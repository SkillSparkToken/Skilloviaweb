// import { FcGoogle } from "react-icons/fc";

// const GoogleAuth = () => {
//   const handleGoogleAuth = () => {
//     // Window features for the popup
//     const width = 500;
//     const height = 600;
//     const left = window.screenX + (window.outerWidth - width) / 2;
//     const top = window.screenY + (window.outerHeight - height) / 2;
    
//     const windowFeatures = `
//       toolbar=no,
//       menubar=no,
//       width=${width},
//       height=${height},
//       top=${top},
//       left=${left}
//     `;

//     // Open the popup and store the reference
//     const authWindow = window.open(
//       `https://testapi.humanserve.net/api/auth/google?redirectUrl=${encodeURIComponent(window.location.origin + '/explore')}`,
//       'Google Authentication',
//       windowFeatures
//     );

//     // Handle communication from popup
//     const checkPopup = setInterval(() => {
//       try {
//         // Check if window is closed
//         if (authWindow?.closed) {
//           clearInterval(checkPopup);
//           // Handle popup closed without authentication
//           console.log('Authentication cancelled');
//           return;
//         }

//         // Check for successful authentication
//         if (authWindow?.location?.href?.includes('success')) {
//           clearInterval(checkPopup);
//           authWindow.close();
//           // Handle successful authentication
//           console.log('Authentication successful');
//           // Redirect to the explore page
//           window.location.href = '/explore';
//         }
//       } catch (error) {
//         // Catch cross-origin errors
//         if (error.name === 'SecurityError') {
//           // This is normal - we can't access the popup while it's on a different domain
//           return;
//         }
//         console.error('Error checking popup:', error);
//       }
//     }, 1000);
//   };

//   return (
//     <div className="">
//       <button className="w-full bg-white text-gray-700 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none" onClick={handleGoogleAuth}>
//         <FcGoogle size={30} /> Sign up with Google
//       </button>
//     </div>
//   );
// };


// export default GoogleAuth;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  
  const currentDateTime = '2025-01-20 13:37:06';
  const currentUser = 'au-lex';

  // Effect to handle the auth response
  useEffect(() => {
    // Function to handle successful authentication
    const handleAuthSuccess = (response) => {
      if (response?.data?.accessToken) {
        // Store the tokens
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        
        // Redirect to explore page
        navigate('/explore');
      }
    };

    // Check if we have an auth response in the window object
    const handleGoogleAuthResponse = () => {
      const authResponse = window?.authResponse; // You might need to adjust this based on how your backend sends the data
      
      if (authResponse?.status === 'success') {
        handleAuthSuccess(authResponse);
      }
    };

    handleGoogleAuthResponse();
  }, [navigate]);

  const handleGoogleAuth = () => {
    try {
      window.open(
        `${import.meta.env.VITE_BASE_URL}/auth/google`,
        "_self"
      );
    } catch (error) {
      setAuthError('Google authentication failed. Please try again.');
      console.error('Google auth error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 sm:px-6 lg:px-8">
      {/* Debug information */}
      <div className="fixed top-0 left-0 m-4 text-xs text-gray-500">
        <p>UTC: {currentDateTime}</p>
        <p>User: {currentUser}</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {authError && (
            <div className="mb-4 p-2 text-sm text-red-600 bg-red-100 rounded">
              {authError}
            </div>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Sign in with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleAuth}
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                <img
                  className="h-5 w-5 mr-2"
                  src="/images/google.png"
                  alt="Google logo"
                />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;