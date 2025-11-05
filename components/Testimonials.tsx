// components/Testimonials.tsx
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

const testimonialsData = [
    { name: 'Oliver Beddows', role: 'Designer, Manchester', title: 'Great quality!', text: 'I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!', avatarUrl: 'https://htmldemo.net/edumall/edumall/assets/images/avatar/avatar-01.jpg' },
    { name: 'Oliver Beddows', role: 'Designer, Manchester', title: 'Code Quality!', text: 'I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!', avatarUrl: 'https://htmldemo.net/edumall/edumall/assets/images/avatar/avatar-02.jpg' },
    { name: 'Oliver Beddows', role: 'Designer, Manchester', title: 'Customer Support', text: 'I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!', avatarUrl: 'https://htmldemo.net/edumall/edumall/assets/images/avatar/avatar-03.jpg' },
    { name: 'Oliver Beddows', role: 'Designer, Manchester', title: 'Nice Design', text: 'I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!', avatarUrl: 'https://htmldemo.net/edumall/edumall/assets/images/avatar/avatar-04.jpg' },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-50/70">
            <div className="container mx-auto text-center">
                <p className="font-semibold text-blue-600">TESTIMONIALS</p>
                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                    See What Our Students Have To
                    <span className="relative inline-block ml-2">
                        Say
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 65 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 13C13.6667 6.66667 35.6 -4.2 63 8" stroke="#FFD966" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
                    {testimonialsData.map((testimonial, index) => (
                        <Card key={index} className="bg-white p-6 rounded-lg shadow-sm">
                            <CardContent className="p-0 flex flex-col items-center text-center">
                                <Image
                                    src={testimonial.avatarUrl}
                                    alt={testimonial.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full mb-4 border-2 border-gray-200"
                                />
                                <h3 className="font-bold text-blue-600 text-lg mb-2">{testimonial.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
                                <p className="font-bold text-gray-800">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;