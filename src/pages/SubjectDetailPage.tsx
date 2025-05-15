
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import ChapterCard from '@/components/ChapterCard';
import { useStudent } from '@/contexts/StudentContext';
import { subjects, getChaptersForSubject } from '@/data/subjectsData';

const SubjectDetailPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { student } = useStudent();
  const navigate = useNavigate();

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  if (!student || !subjectId) {
    return null;
  }

  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) {
    navigate('/subjects');
    return null;
  }

  const chapters = getChaptersForSubject(subjectId, student.grade);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl">{subject.icon}</span>
            <h1 className="text-3xl font-bold">{subject.name}</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Explore {subject.name} topics for Grade {student.grade}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapters.length > 0 ? (
              chapters.map(chapter => (
                <ChapterCard 
                  key={chapter.id} 
                  chapter={chapter} 
                  subjectColor={subject.color} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No chapters available for this subject yet.</p>
                <button 
                  className="mt-4 text-eduBlue hover:underline"
                  onClick={() => navigate('/subjects')}
                >
                  Return to subjects
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailPage;
