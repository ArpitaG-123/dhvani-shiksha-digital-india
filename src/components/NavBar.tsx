import React from 'react';
import { useStudent } from '@/contexts/StudentContext';
import { Button } from '@/components/ui/button';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { student, clearStudent } = useStudent();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    clearStudent();
    navigate('/');
  };

  return (
    <nav className="bg-eduBlue text-white px-4 py-3 shadow flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          to="/subjects"
          className={`font-semibold hover:underline ${location.pathname.startsWith('/subject') || location.pathname === '/subjects' ? 'underline' : ''}`}
        >
          Subjects
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/welcome"
          className={`hover:underline ${location.pathname === '/welcome' ? 'underline' : ''}`}
        >
          Welcome
        </Link>
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
    </nav>
  );
};

export default NavBar;