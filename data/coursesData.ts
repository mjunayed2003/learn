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
  description?: string;
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: 'Successful Negotiation: Master Your Negotiating Skills',
    instructor: 'Parra',
    price: 39.0,
    level: 'All Levels',
    rating: 5,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-11.jpg',
    isFree: false,
    description:
      'Learn how to negotiate effectively and confidently in any situation. Perfect for business and personal growth.',
  },
  {
    id: 2,
    title: 'Time Management Mastery: Do More, Stress Less',
    instructor: 'Parra',
    price: 29.99,
    level: 'All Levels',
    rating: 5,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-12.jpg',
    isFree: false,
    description:
      'Master time management skills to increase productivity, reduce stress, and achieve your goals efficiently.',
  },
  {
    id: 3,
    title: 'Angular - The Complete Guide (2020 Edition)',
    instructor: 'Parra',
    price: 49.99,
    level: 'Beginner',
    rating: 5,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-1.jpg',
    isFree: false,
    description:
      'Complete Angular guide from basics to advanced with real-world projects.',
  },
  {
    id: 4,
    title: 'Consulting Approach to Problem Solving',
    instructor: 'Parra',
    price: 0,
    level: 'All Levels',
    rating: 4,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-2.jpg',
    isFree: true,
    description:
      'Develop a structured approach to problem-solving inspired by top consulting firms.',
  },
  {
    id: 5,
    title: 'The Business Intelligence Analyst Course 2020',
    instructor: 'Parra',
    price: 0,
    level: 'All Levels',
    rating: 4,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-13.jpg',
    isFree: true,
    description:
      'Learn data analysis, business intelligence tools, and create professional dashboards for decision-making.',
  },
  {
    id: 6,
    title: 'Become a Product Manager | Learn the Skills & Get the Job',
    instructor: 'Parra',
    price: 0,
    level: 'All Levels',
    rating: 4,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-6.jpg',
    isFree: true,
    description:
      'Master the art of product management, from idea conception to market launch and growth strategy.',
  },
  {
    id: 7,
    title: 'Mechanical Engineering and Electrical Engineering Explained',
    instructor: 'Oliver Porter',
    price: 84.0,
    level: 'Beginner',
    rating: 5,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-3.jpg',
    isFree: false,
    description:
      'Understand the fundamentals of mechanical and electrical engineering concepts with practical examples.',
  },
  {
    id: 8,
    title: 'Successful Negotiation Learn Algebra The Easy Way!',
    instructor: 'Oliver Porter',
    price: 45.0,
    level: 'Beginner',
    rating: 5,
    reviews: 2,
    imageUrl:
      'https://htmldemo.net/edumall/edumall/assets/images/courses/courses-5.jpg',
    isFree: false,
    description:
      'A simplified approach to algebra concepts with real-world applications for beginners.',
  },
];
