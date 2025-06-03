'use client';

import React from 'react';
import { Person, people } from '@/utils/arrays/types';




// Individual PersonCard component
const PersonCard: React.FC<{ person: Person }> = ({ person }) => {
  const handleConnect = () => {
    if (person.email) {
      window.location.href = `mailto:${person.email}`;
    }
    // If no email, do nothing - button won't trigger any action
  };



  return (
    <div className="bg-[#060A0A] opacity-77 text-white rounded-4xl p-6 w-full max-w-[28em] flex flex-col items-center shadow-xl">
      <h3 className="text-3xl font-extrabold text-center uppercase tracking-wide">
        {person.name}
      </h3>
      <p className="text-xl text-center text-gray-300 mt-8">{person.job}</p>
      <button
        onClick={handleConnect}
        disabled={!person.email}
        className={`mt-6 px-6 py-4 rounded-full text-xl font-bold transition 
          ${
            person.email
              ? "  cursor-pointer bg-[radial-gradient(circle,_#E67716_20%,_#761E1C_100%)] hover:bg-red-600 hover:shadow-xs"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
      >
        Contact
      </button>
    </div>
  );
};

const PeopleCards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#551818] to-[#2a0d0d] py-16 px-4">
      <h1 className="text-5xl font-bold text-center text-white mb-12 tracking-widest">
        ARTISTS
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleCards;