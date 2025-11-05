// components/UpcomingEvents.tsx
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MapPin } from 'lucide-react';

const eventsData = [
  {
    date: 'AUGUST 18, 2022',
    title: 'Global Education fair | Meeting for Everyone',
    location: 'United States',
    imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/event/event-thumbnail-10.jpg',
  },
  {
    date: 'NOVEMBER 9, 2022',
    title: 'London International Conference on Education',
    location: 'London',
    imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/event/event-thumbnail-04.jpg',
  },
  {
    date: 'DECEMBER 21, 2022',
    title: 'Digital Skills: Using Information to Build Business',
    location: 'United Kingdom',
    imageUrl: 'https://htmldemo.net/edumall/edumall/assets/images/event/event-thumbnail-01.jpg',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto grid lg:grid-cols-3 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-1 space-y-4">
          <p className="font-semibold text-blue-600">EVENTS</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Upcoming
            <span className="relative inline-block ml-2">
              Events
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 13C20.6667 6.66667 54.2 -4.2 98 8" stroke="#FFD966" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-gray-500">
            You can show all events here to let people take the chances to get involve.
          </p>
          <Button variant="outline" className="bg-gray-100 hover:bg-gray-200">
            View all
          </Button>
        </div>

        {/* Right Content - Events Grid */}
        <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <Card key={index} className="border-none shadow-none bg-gray-50 p-3 rounded-lg">
              <Image
                src={event.imageUrl}
                alt={event.title}
                width={300}
                height={180}
                className="w-full rounded-md object-cover h-36"
              />
              <CardContent className="p-4 px-1 pb-0">
                <p className="text-xs text-gray-500 mb-2">{event.date}</p>
                <h3 className="font-semibold text-md text-gray-800 mb-3 h-12">{event.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;