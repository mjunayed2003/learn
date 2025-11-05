'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, FileText, BarChart3, CurlyBraces } from "lucide-react";

const stats = [
  {
    value: "253,085",
    label: "Students Enrolled",
    icon: Lightbulb,
    description: "Students enrolled",
  },
  {
    value: "18,099",
    label: "Classes Completed",
    icon: FileText,
    description: "Classes completed",
  },
  {
    value: "89%",
    label: "Learners Report Career Benefits",
    icon: BarChart3,
    description: "Learners report career benefits",
  },
  {
    value: "4,038",
    label: "Instructors from Top Courses",
    icon: CurlyBraces,
    description: "Instructors from top courses",
  },
];

export default function Service() {
  return (
    <main className=" flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
      <Card className="w-full max-w-6xl bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-bold text-blue-600 mb-1">Start to Success</CardTitle>
          <div className="flex justify-center">
            <span className="text-xl font-semibold text-blue-600">Achieve Your Goals</span>
            <span className="ml-1 text-xl font-semibold underline underline-offset-4 decoration-yellow-400">with EduMall</span>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-2xl text-gray-800 mb-1">{stat.value}</div>
                <CardDescription className="text-sm text-gray-600">{stat.label}</CardDescription>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}