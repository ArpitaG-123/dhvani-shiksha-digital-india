
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import SubjectCard from '@/components/SubjectCard';
import { useStudent } from '@/contexts/StudentContext';
import { useNavigate } from 'react-router-dom';
import { getSubjectsForStudent } from '@/data/subjectsData';

const SubjectsPage: React.FC = () => {
  const { student } = useStudent();
  const navigate = useNavigate();

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  if (!student) {
    return null;
  }

  const subjects = getSubjectsForStudent(student.state, student.grade);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Subjects</h1>
            <p className="text-gray-600">
              Explore subjects for Grade {student.grade} aligned with the {student.state} curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.length > 0 ? (
              subjects.map(subject => (
                <SubjectCard key={subject.id} subject={subject} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No subjects available for your selected grade and state.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
