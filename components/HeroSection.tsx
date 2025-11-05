"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookCopy, Star, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], 
    },
  },
};




const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
const HeroSection = () => {
  return (
    <section className="bg-slate-50/50 py-20 overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12 items-center px-4">

        {/* Left Image Section */}
        <motion.div
          className="lg:col-span-3 hidden lg:flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-80">
            <div className="absolute top-10 left-10 w-full h-full rounded-2xl bg-yellow-300">
              <Image
                src="https://htmldemo.net/edumall/edumall/assets/images/home-03-hero-image-03.jpg"
                alt="Student with backpack"
                width={256}
                height={320}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
            <motion.div
              className="absolute -top-4 -left-4 w-40 h-40 rounded-2xl shadow-lg border-4 border-white"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Image
                src="https://htmldemo.net/edumall/edumall/assets/images/home-03-hero-image-01.jpg"
                alt="Happy student"
                width={160}
                height={160}
                className="object-cover w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Center Content Section */}
        <motion.div
          className="lg:col-span-6 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Learn Something
            <br />
            <span className="relative text-blue-600 inline-block">
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                New
              </motion.span>
              <svg
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32"
                viewBox="0 0 127 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 17.5C31.3333 7.83333 81.8 -4.7 123.5 11"
                  stroke="#FFD966"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Today
          </h1>

          <motion.div
            className="mt-10 max-w-lg mx-auto relative"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
          >
            <Input
              type="search"
              placeholder="What do you want to learn?"
              className="h-14 pl-6 pr-12 rounded-full shadow-sm text-lg"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-600" />
          </motion.div>

          <motion.div
            className="mt-16 flex flex-col md:flex-row justify-center gap-10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <BookCopy className="w-10 h-10 text-blue-500 mb-2" />,
                title: "6,000 Online Courses",
                desc: "Explore a wide range of courses",
              },
              {
                icon: <Star className="w-10 h-10 text-blue-500 mb-2" />,
                title: "Top Instructors",
                desc: "Learn from the best experts",
              },
              {
                icon: <Clock className="w-10 h-10 text-blue-500 mb-2" />,
                title: "Portable Programs",
                desc: "Learn anywhere, anytime",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center flex-col text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                <p className="text-lg font-bold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="lg:col-span-3 hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-64 h-80">
            <Image
              src="https://htmldemo.net/edumall/edumall/assets/images/home-03-hero-image-02.jpg"
              alt="Student with laptop"
              width={256}
              height={320}
              className="object-cover w-full h-full rounded-2xl"
            />
            <motion.div
              className="absolute -bottom-8 -left-10 w-60 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="animate-bounce-slow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600 leading-snug">
                      Congratulations to Sophia for being student of the week
                      this week!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
