
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Subject } from '@/data/subjectsData';
import { useNavigate } from 'react-router-dom';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/subject/${subject.id}`);
  };

  return (
    <Card className={`border-l-4 ${subject.color} ${subject.color.replace('bg-', 'bg-opacity-10')} card-hover`}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{subject.icon}</span>
          <CardTitle>{subject.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="text-black text-opacity-70">
          Explore interactive lessons, videos, and quizzes for {subject.name}.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${subject.color} hover:opacity-90 text-white`}
          onClick={handleExplore}
        >
          Explore Subject
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SubjectCard;
