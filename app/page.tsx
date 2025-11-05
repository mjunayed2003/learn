import HeroSection from "@/components/HeroSection";
import NewsAndBlogs from "@/components/NewsAndBlogs";
import PopularCourses from "@/components/PopularCourses";
import Service from "@/components/Service";
import Testimonials from "@/components/Testimonials";
import UpcomingEvents from "@/components/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCourses />
      <Service />
      <UpcomingEvents />
      <Testimonials />
      <NewsAndBlogs />
    </div>
  );
}
