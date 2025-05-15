
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStudent } from '@/contexts/StudentContext';

const Index: React.FC = () => {
  const { isOnboarded } = useStudent();

  if (isOnboarded) {
    return <Navigate to="/subjects" />;
  }

  return <Navigate to="/welcome" />;
};

export default Index;
