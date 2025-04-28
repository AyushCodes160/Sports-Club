import React from 'react';

interface SportCardProps {
  name: string;
  image: string;
  description: string;
  coordinator: {
    name: string;
    contact: string;
  };
}

const SportCard: React.FC<SportCardProps> = ({
  name,
  image,
  description,
  coordinator,
}) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-700">
      <div
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{name}</h3>
        <p className="text-slate-300 mb-6">{description}</p>
        
        <div className="border-t border-slate-700 pt-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-3">Team Coordinator</h4>
          <div className="space-y-2">
            <p className="text-slate-300">
              <span className="text-slate-400">Name:</span> {coordinator.name}
            </p>
            <p className="text-slate-300">
              <span className="text-slate-400">Contact:</span>{' '}
              <a 
                href={`mailto:${coordinator.contact}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {coordinator.contact}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;