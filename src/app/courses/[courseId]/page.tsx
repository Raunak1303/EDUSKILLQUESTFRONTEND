'use client'; // Ensure this is a client component

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import courseSubjects from '@/data/course_subjects.json';
import Link from 'next/link';

type Subject = {
  id: string;
  title: string;
  description: string;
};

const CoursePage = () => {
  const pathname = usePathname();
  const numericId = pathname.split('/').pop(); // Extract the numeric part of the courseId
  const courseId = `course${numericId}`; // Construct the full courseId

  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    if (courseId) {
      const fetchedSubjects = (courseSubjects.subjects as Record<string, Subject[]>)[courseId] || [];
      setSubjects(fetchedSubjects);
    }
  }, [courseId]);

  if (!courseId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 pt-36">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-600 text-center font-serif text-blue mb-12">
        Subjects
      </h1>
      <div className="flex flex-wrap justify-center">
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <div 
              key={index} 
              className="m-4 p-6 bg-black rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl w-80"
            >
              <h2 className="text-2xl font-bold mb-4 text-white-900">{subject.title}</h2>
              <p className="text-white-700 mb-4">{subject.description}</p>
              <Link href={`/courses/${numericId}/${subject.id}`}>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                  Chapters
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-white text-xl">No subjects available for this course.</div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
