import { coursesData } from '@/data/coursesData';
import Image from 'next/image';
import Link from 'next/link';

interface CourseDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function CourseDetails({ params }: CourseDetailsProps) {
  const { id } = await params; // ✅ params resolve করতে await দিচ্ছি
  const course = coursesData.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Link href="/courses" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Courses
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
          <p className="text-gray-500 mb-2">Level: {course.level}</p>
          <p className="text-yellow-500 mb-4">
            ⭐ {course.rating} ({course.reviews} reviews)
          </p>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <p className="text-2xl font-semibold mb-6">
            {course.isFree ? 'Free' : `$${course.price}`}
          </p>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
