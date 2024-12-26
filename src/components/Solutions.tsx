import React from 'react';
import { Users, ChevronRight } from 'lucide-react';

const solutions = [
  {
    title: 'Enterprise Solutions',
    description: 'Comprehensive IT infrastructure for large organizations',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Small Business IT',
    description: 'Tailored solutions for growing businesses',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Solutions = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solutions for Every Scale
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Whether you're a small business or a large enterprise, we have the right solution for you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <div key={index} className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {solution.title}
              </h3>
              <p className="text-base text-gray-500">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;