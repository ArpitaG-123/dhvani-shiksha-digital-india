
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Chapter } from '@/data/subjectsData';
import { useNavigate } from 'react-router-dom';

interface ChapterCardProps {
  chapter: Chapter;
  subjectColor: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, subjectColor }) => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/chapter/${chapter.id}`);
  };

  return (
    <Card className="border-l-4 border-opacity-70" style={{ borderLeftColor: `var(--${subjectColor.replace('bg-', '')})` }}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{chapter.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="text-gray-700">
          {chapter.description}
        </CardDescription>
        <div className="flex mt-3 space-x-2">
          {chapter.hasVideo && (
            <span className="bg-eduBlue/20 text-eduBlue text-xs px-2 py-1 rounded-full">
              Video
            </span>
          )}
          {chapter.hasAudio && (
            <span className="bg-eduGreen/20 text-eduGreen text-xs px-2 py-1 rounded-full">
              Audio
            </span>
          )}
          {chapter.hasQuiz && (
            <span className="bg-eduPurple/20 text-eduPurple text-xs px-2 py-1 rounded-full">
              Quiz
            </span>
          )}
          {chapter.hasGame && (
            <span className="bg-eduOrange/20 text-eduOrange text-xs px-2 py-1 rounded-full">
              Game
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${subjectColor} hover:opacity-90 text-white`}
          onClick={handleStart}
        >
          Start Learning
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChapterCard;
