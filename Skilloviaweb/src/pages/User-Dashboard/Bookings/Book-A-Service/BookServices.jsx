import React from 'react';
import { ArrowLeft, Star, StarHalf, Upload, ChevronDown } from 'lucide-react';

// Profile Component
const Profile = () => {
  const skills = [
    { name: 'Dog walking', level: 'Expert', rating: 4 },
    { name: 'Baby sitting', level: 'Expert', rating: 5 },
    { name: 'Electrical fixing', level: 'Expert', rating: 4 }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <img 
          src="/api/placeholder/80/80" 
          alt="Profile"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">Darnell Mertz</h2>
          <p className="text-gray-600">@samrutopie123</p>
          <div className="flex gap-4 mt-1 text-sm text-gray-600">
            <span>1.2k followers</span>
            <span>604 following</span>
          </div>
        </div>
        <button className="ml-auto px-4 py-1 border rounded-full hover:bg-gray-50">
          Follow
        </button>
      </div>

      <div className="mb-8">
        <h3 className="font-semibold mb-2">Bio</h3>
        <p className="text-gray-600">
          Passionate about creativity and innovation, this individual thrives on exploring
          new ideas and pushing boundaries. With a love for nature and travel, they find
          inspiration in the world around them. A dedicated lifelong learner, they are always...
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Skills</h3>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-medium">{skill.name}</h4>
                <p className="text-sm text-gray-600">Experience level: {skill.level}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < skill.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button className="px-4 py-1 bg-yellow-100 rounded-full text-sm hover:bg-yellow-200">
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Service Details Component
const ServiceDetails = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold">Darnell Mertz - Dog walking</h1>
        <button className="ml-auto px-4 py-1 bg-yellow-100 rounded-full hover:bg-yellow-200">
          Book
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <img 
          src="/api/placeholder/400/300" 
          alt="Service 1"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img 
          src="/api/placeholder/400/300" 
          alt="Service 2"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img 
          src="/api/placeholder/400/300" 
          alt="Service 3"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="font-semibold mb-2">Description</h2>
        <p className="text-gray-600">
          Passionate about creativity and innovation, this individual thrives on exploring
          new ideas and pushing boundaries. With a love for nature and travel, they find
          inspiration in the world around them. A dedicated lifelong learner, they are all...
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-gray-600">Expert</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <span>Hourly rate</span>
            <span className="font-semibold">£20</span>
          </div>
          <span>•</span>
          <span>2 spark tokens</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold">Reviews (120)</h2>
          <button className="text-blue-600 hover:underline">See all</button>
        </div>
        <div className="space-y-4">
          {[1, 2].map((review) => (
            <div key={review} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium">Winifred Stamm</span>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">
                Iure voluptatem dicta necessitatibus cupiditate ut. In nulla consequatur voluptatibus
                voluptatem fugiat non voluptas dicta. Animi commodi dolectus sapiente. Accusantiu...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Booking Form Component
const BookingForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-semibold">Book service</h1>
          <button className="ml-auto px-4 py-2 bg-green-400 text-white rounded-full hover:bg-green-500">
            Submit
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Skill</label>
            <input
              type="text"
              value="Dog Walking"
              disabled
              className="w-full p-3 bg-gray-100 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea
              className="w-full p-3 bg-gray-50 rounded-lg min-h-[100px]"
              placeholder="I want you to walk my dog for a few hours, he's a German Shepard and likes treats."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              placeholder="Search location"
              className="w-full p-3 bg-gray-50 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="text"
              placeholder="DD/MM/YY"
              className="w-full p-3 bg-gray-50 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">Click to upload image</p>
              <p className="text-xs text-gray-400 mt-1">SVG, PNG, or JPG</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Summary</h3>
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-medium">Dog Walking</p>
                <p className="text-sm text-gray-600">23 Sept 2022 - 12:39 AM</p>
              </div>
              <p className="font-medium">£2,300</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p>Service charge</p>
              <p>£400</p>
            </div>
            <div className="flex justify-between items-center font-medium">
              <p>Total</p>
              <p>£2,700</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4">Payment method</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span>Debit/Credit Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg cursor-pointer">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span>Barter service</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Profile />
      <div className="my-8" />
      <ServiceDetails />
      <div className="my-8" />
      <BookingForm />
    </div>
  );
}