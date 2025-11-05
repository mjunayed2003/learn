'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  level: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  isFree: boolean;
}

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={i + 1 <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
    />
  ));
};

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={300}
          height={180}
          className="w-full h-44 object-cover"
        />
        {course.isFree && (
          <Badge className="absolute top-3 left-3 bg-green-500 text-white">FREE</Badge>
        )}
      </div>
      <CardContent className="p-4 space-y-2">
        <Badge variant="outline">{course.level}</Badge>
        <h3 className="text-md font-semibold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.instructor}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-800">
            {course.isFree ? 'Free' : `$${course.price}`}
          </p>
          <div className="flex items-center space-x-1">
            {renderStars(course.rating)}
            <span className="text-sm text-gray-500">({course.reviews})</span>
          </div>
        </div>

        <Link href={`/courses/${course.id}`}>
          <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
            Enroll Now
          </button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
