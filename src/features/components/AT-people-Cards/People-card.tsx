'use client';

import React, { useState } from 'react';
import {
  PersonCardProps,
  CategorySelectionProps,
  PeopleCardsProps,
  people,
  categories
} from '@/features/arrays/types';

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const handleConnect = () => {
    if (person.email) {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <div className="bg-[#060A0A] opacity-77 text-white rounded-4xl p-6 w-full sm:w-[22rem] md:w-[26rem] lg:w-[28rem] flex flex-col justify-between items-center shadow-xl">
      <h3 className="text-3xl font-extrabold text-center uppercase tracking-wide">
        {person.name}
      </h3>
      <p className="text-xl text-center text-white mt-8">
        {[person.subrole, person.subrole2, person.subrole3]
          .filter(Boolean)
          .join(' / ')}
      </p>
      <button
        onClick={handleConnect}
        disabled={!person.email}
        className={`mt-6 px-6 py-4 rounded-full text-xl font-bold transition 
          ${
            person.email
              ? "cursor-pointer bg-[radial-gradient(circle,_#E67716_20%,_#761E1C_120%)]"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
      >
        Contact
      </button>
    </div>
  );
};

const CategorySelection: React.FC<CategorySelectionProps> = ({ onCategorySelect }) => {
  return (
    <div className="py-16 px-2 md:px-4 flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-wrap justify-center items-center md:m-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="bg-[#060A0A] m-2 text-white min-h-[7em] rounded-full w-[45%] md:w-[29%] flex flex-col justify-center items-center hover:cursor-pointer transition-all duration-300 hover:scale-105 shadow-none hover:shadow-[0_0_15px_6px_rgba(255,115,0,0.7)]"
          >
            <div className="text-center">
              <h2 className="text-sm md:text-xl font-extrabold text-white uppercase tracking-wide m-auto p-2">
                {category.name}
              </h2>
              <div className="w-16 bg-[radial-gradient(circle,_#EC8C2D_20%,_#761E1C_100%)] rounded-3xl opacity-80"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const PeopleCards: React.FC<PeopleCardsProps> = ({ category, onBack }) => {
  const filteredPeople = people.filter(person => person.category === category);
  const categoryInfo = categories.find(cat => cat.id === category);

  return (
    <div className="py-16 px-4">
      <div className="flex items-center justify-center flex-col mb-12 gap-6">
        <button
          onClick={onBack}
          className="bg-transparent flex opacity-77 hover:opacity-90 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:cursor-pointer hover:scale-105"
        >
          ← Back
        </button>
        <h2 className="flex text-2xl font-bold text-center text-white tracking-widest uppercase">
          {categoryInfo?.name}
        </h2>
      </div>

      {filteredPeople.length === 0 ? (
        <div className="text-center text-gray-300 text-xl">
          No {category}s found
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredPeople.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

const PeopleCard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleBack = (): void => {
    setSelectedCategory(null);
  };

  return (
    <div className="flex justify-center items-center flex-grow bg-gradient-to-b from-[#79221E] to-[#4A1410] relative min-h-[70vh] max-md:min-h-[60vh] max-sm:min-h-[65vh] -mb-36 pb-35 md:-mb-36 md:pb-36">
      {!selectedCategory ? (
        <CategorySelection onCategorySelect={handleCategorySelect} />
      ) : (
        <PeopleCards category={selectedCategory} onBack={handleBack} />
      )}
    </div>
  );
};

export default PeopleCard;
