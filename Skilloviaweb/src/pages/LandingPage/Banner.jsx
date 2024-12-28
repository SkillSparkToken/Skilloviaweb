import React from 'react'

const Banner = () => {
  return (
    <div>
           {/* Main content section */}
           <div className="container bg-red-500 mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto pt-20">
          <h1 className="text-white text-4xl md:text-5xl font-normal mb-4">
            Ready to
          </h1>
          <h2 className="text-white text-4xl md:text-5xl italic font-serif mb-12">
            share your skills and services?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-400 text-gray-900 px-6 py-2 rounded-full hover:bg-green-500 transition-colors">
              Sign Up for Free
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
              <span>Download for Android</span>
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
              <span>Download for iOS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
