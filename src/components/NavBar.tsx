
import React from 'react';
import { useStudent } from '@/contexts/StudentContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { student, clearStudent } = useStudent();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearStudent();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-eduBlue to-eduPurple p-2 rounded-lg">
            <span className="text-white text-xl font-bold">E</span>
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-eduBlue">Edu</span>
            <span className="text-eduPurple">Dhvani</span>
          </h1>
        </div>
        
        {student && (
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <span className="text-sm font-medium text-gray-500">Welcome,</span>
              <span className="ml-1 font-semibold text-gray-800">{student.name}</span>
            </div>
            <Button
              variant="outline"
              className="text-sm border-eduBlue text-eduBlue hover:bg-eduBlue hover:text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
