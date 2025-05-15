
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Student {
  name: string;
  schoolType: string;
  state: string;
  grade: string;
  subjects?: string[];
}

interface StudentContextType {
  student: Student | null;
  setStudent: (student: Student) => void;
  isOnboarded: boolean;
  clearStudent: () => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudentData] = useState<Student | null>(null);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);

  useEffect(() => {
    const storedStudent = localStorage.getItem('edudhvani-student');
    if (storedStudent) {
      try {
        setStudentData(JSON.parse(storedStudent));
        setIsOnboarded(true);
      } catch (error) {
        console.error('Failed to parse stored student data:', error);
        localStorage.removeItem('edudhvani-student');
      }
    }
  }, []);

  const setStudent = (student: Student) => {
    setStudentData(student);
    setIsOnboarded(true);
    localStorage.setItem('edudhvani-student', JSON.stringify(student));
  };

  const clearStudent = () => {
    setStudentData(null);
    setIsOnboarded(false);
    localStorage.removeItem('edudhvani-student');
  };

  return (
    <StudentContext.Provider value={{ student, setStudent, isOnboarded, clearStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
