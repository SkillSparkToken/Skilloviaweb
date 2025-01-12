import React from 'react';
import UserLayout from '../UserLayout/UserLayout';
import Verify from '../Verify/Verify';

const categories = [
  { id: 1, name: 'DIY', image: '/api/placeholder/160/160' },
  { id: 2, name: 'Baby sitting', image: '/api/placeholder/160/160' },
  { id: 3, name: 'Arts & Design', image: '/api/placeholder/160/160' },
  { id: 4, name: 'Photography', image: '/api/placeholder/160/160' },
  { id: 5, name: 'Cooking', image: '/api/placeholder/160/160' }
];

const people = [
  { id: 1, name: 'Darnell Mertz', image: '/api/placeholder/80/80' },
  { id: 2, name: 'Courtney Henry', image: '/api/placeholder/80/80' },
  { id: 3, name: 'Wade Warren', image: '/api/placeholder/80/80' },
  { id: 4, name: 'Hannah Simmons', image: '/api/placeholder/80/80' },
  { id: 5, name: 'Finnley Green', image: '/api/placeholder/80/80' },
  { id: 6, name: 'Ariana Lopez', image: '/api/placeholder/80/80' },
  { id: 7, name: 'Samuel Patel', image: '/api/placeholder/80/80' }
];

const ExploreSection = () => {
  return (
    <UserLayout>

<Verify />
 
    <div className="max-w-4xl mx-auto px-4 rounded-lg">
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Explore categories</h2>
        <div className="grid grid-cols-5 gap-4">
          {categories.map(category => (
            <div key={category.id} className="group cursor-pointer">
              <div className="aspect-square mb-2 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-center text-gray-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">People nearby</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {people.map(person => (
            <div key={person.id} className="flex flex-col items-center flex-shrink-0">
              <div className="w-20 h-20 mb-2 overflow-hidden rounded-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-center text-gray-800 whitespace-nowrap">
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </UserLayout>
  );
};

export default ExploreSection;