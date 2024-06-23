'use client'; // Ensure this is a client component

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import courseSubjects from '@/data/course_subjects.json';

type Chapter = {
  title: string;
  description: string;
};

const SubjectPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const numericCourseId = pathSegments[pathSegments.length - 2];
  const subjectId = pathSegments[pathSegments.length - 1];
  const courseId = `course${numericCourseId}`; // Construct the full courseId

  const [chapters, setChapters] = useState<Chapter[]>([]);

  useEffect(() => {
    if (courseId && subjectId) {
      const subjects = (courseSubjects.subjects as Record<string, any[]>)[courseId] || [];
      const subject = subjects.find(sub => sub.id === subjectId);
      if (subject) {
        setChapters(subject.chapters || []);
      }
    }
  }, [courseId, subjectId]);

  if (!courseId || !subjectId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-yellow-500 to-red-500 py-12 pt-36">
      <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-purple-600 text-center font-serif text-blue mb-12">
        Chapters
      </h1>
      <div className="flex flex-wrap justify-center">
        {chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <div 
              key={index} 
              className="m-4 p-6 bg-black rounded-lg shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl w-80"
            >
              <h2 className="text-2xl font-bold mb-4 text-white-900">{chapter.title}</h2>
              <p className="text-white-700 mb-4">{chapter.description}</p>
              <button 
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => window.location.href = '/index.html'}
              >
                Start Test
              </button>
            </div>
          ))
        ) : (
          <div className="text-white text-xl">No chapters available for this subject.</div>
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
