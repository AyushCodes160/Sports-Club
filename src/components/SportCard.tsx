import React from 'react';

interface SportCardProps {
  name: string;
  image: string;
  description: string;
  coach: string;
  schedule: string;
  achievements: string[];
}

const SportCard: React.FC<SportCardProps> = ({
  name,
  image,
  description,
  coach,
  schedule,
  achievements,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Coach</h4>
          <p className="text-gray-700">{coach}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Training Schedule</h4>
          <p className="text-gray-700">{schedule}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
          <ul className="list-disc pl-5 text-gray-700">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        <a
          href="#"
          className="inline-block mt-5 px-4 py-2 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800 transition-colors"
        >
          Join Team
        </a>
      </div>
    </div>
  );
};

export default SportCard;