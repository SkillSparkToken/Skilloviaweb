import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1732032825/0f97c93d7e2a172dfab38a344f9b8ce0_r6frdm.jpg",
    title: "Meet people in your community",
  },
  {
    image: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1732032776/212760ab183179b3b25c4e05722b52ed_rvwdpf.jpg",
    title: "Join local events",
  },

];

const LoginPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-50 md:p-8 p-4">
      <div className="flex flex-col w-full md:w-1/2 md:p-8">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold mb-6">Welcome back!</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-green-500 transition-colors"
            >
              Verify
            </button>
            
            <div className="text-center text-gray-500">Or</div>
            
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              Continue with Facebook
            </button>
            
            <button
              type="button"
              className="w-full bg-white text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Continue with Google
            </button>
            
            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
            >
              Continue with Apple
            </button>
          </form>
          
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account? 
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Sign up
            </a>
          </p>
          
          <p className="mt-4 text-xs text-gray-500">
            By continuing to use SoftSorta, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
      
      <div className="hidden md:block w-1/2 relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-[2rem]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-8 rounded-[2rem]">
              <h2 className="text-white text-4xl font-bold">{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;