import React from 'react';

interface LeaderCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  sport?: string;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ name, role, image, bio, sport }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {sport && (
          <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
            {sport}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-700 font-medium mb-4">{role}</p>
        <p className="text-gray-700">{bio}</p>
      </div>
    </div>
  );
};

export default LeaderCard;