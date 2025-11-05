'use client';

import { useState } from 'react';
import CourseCard, { Course } from './CourseCard';
import { Button } from './ui/button';
import { coursesData } from '@/data/coursesData'; // ✅ এখানে import

const categories = ['All', 'Trending', 'Popularity', 'Featured', 'Art & Design'];

const PopularCourses = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = coursesData.filter((course) => {
    switch (activeCategory) {
      case 'Trending':
        return course.rating >= 5;
      case 'Popularity':
        return course.reviews > 2;
      case 'Featured':
        return course.price > 0 && course.rating >= 4;
      case 'Art & Design':
        return course.title.toLowerCase().includes('design');
      default:
        return true;
    }
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Most Popular
          <span className="relative inline-block ml-2 text-primary">
            Courses
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 135 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 15.5C31.8333 6.5 83.1 -6.5 132 10"
                stroke="#FFD966"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mt-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'ghost'}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-800 text-white shadow-md hover:bg-gray-700'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 text-left">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
          ) : (
            <p className="col-span-full text-gray-500 text-center">No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
