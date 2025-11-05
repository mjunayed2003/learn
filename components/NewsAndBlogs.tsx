// components/NewsAndBlogs.tsx
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Calendar, Eye } from 'lucide-react';

const recentPosts = [
    '4 Learning Management System Design Tips For Better eLearning',
    'The Importance Of Intrinsic Motivation For Students',
    'A Better Alternative To Grading Student Writing',
    'It’s Time To Think Differently About Writing In The Classroom',
];

const blogData = [
    { date: 'August 10, 2022', views: 4056, title: 'Back To School Social-Emotional Basics: Relationship, Rhythm, Release', excerpt: 'As our elementary students head back to school in person, ...', imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/blog/blog-10.jpg' },
    { date: 'August 10, 2022', views: 370, title: 'The Challenge Of Global Learning In Public Education', excerpt: 'As our elementary students head back to school in person, ...', imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/blog/blog-11.jpg' },
    { date: 'August 10, 2022', views: 287, title: 'Exactly How Technology Can Make Reading Better', excerpt: 'As our elementary students head back to school in person, ...', imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/blog/blog-12.jpg' },
];

const NewsAndBlogs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto grid lg:grid-cols-3 gap-12">
                {/* Left Column - Recent Posts */}
                <div className="lg:col-span-1">
                    <p className="font-semibold text-blue-600">BLOG UPDATE</p>
                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        EduMall's News And
                        <span className="relative inline-block ml-2">
                            Blogs
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 90 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 13C18.1667 6.66667 48.9 -4.2 88 8" stroke="#FFD966" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>
                    <ul className="mt-8 space-y-4">
                        {recentPosts.map((post, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-3 mt-1">▶</span>
                                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">{post}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column - Blog Cards */}
                <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogData.map((blog, index) => (
                        <Card key={index} className="border-none shadow-none">
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                width={300}
                                height={180}
                                className="w-full rounded-md object-cover h-40"
                            />
                            <CardContent className="p-0 pt-4">
                                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-2">
                                    <div className="flex items-center"><Calendar size={14} className="mr-1.5" /> {blog.date}</div>
                                    <div className="flex items-center"><Eye size={14} className="mr-1.5" /> {blog.views} views</div>
                                </div>
                                <h3 className="font-semibold text-md text-gray-800 mb-2 h-16">{blog.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{blog.excerpt}</p>
                                <Button variant="outline" className="bg-gray-100 hover:bg-gray-200 text-sm h-9">
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsAndBlogs;