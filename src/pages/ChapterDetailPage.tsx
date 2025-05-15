
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import ChapterContent from '@/components/ChapterContent';
import ContentGenerator from '@/components/ContentGenerator';
import { useStudent } from '@/contexts/StudentContext';
import { chapters, subjects } from '@/data/subjectsData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, Wand2 } from 'lucide-react';

const ChapterDetailPage: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const { student } = useStudent();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'content' | 'generator'>('content');

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  if (!student || !chapterId) {
    return null;
  }

  // Find the chapter
  let foundChapter = null;
  let subjectId = '';
  
  for (const [sid, chaptersArray] of Object.entries(chapters)) {
    const chapter = chaptersArray.find(c => c.id === chapterId);
    if (chapter) {
      foundChapter = chapter;
      subjectId = sid;
      break;
    }
  }

  if (!foundChapter) {
    navigate('/subjects');
    return null;
  }

  const subject = subjects.find(s => s.id === subjectId);
  
  if (!subject) {
    navigate('/subjects');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button
              variant="ghost"
              className="text-eduBlue hover:text-eduBlue hover:bg-eduBlue/10 mb-2"
              onClick={() => navigate(`/subject/${subjectId}`)}
            >
              ← Back to {subject.name}
            </Button>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{subject.icon}</span>
              <h1 className="text-2xl font-bold">{subject.name} - {foundChapter.title}</h1>
            </div>
            
            <p className="text-gray-600 mt-2">
              Grade {foundChapter.grade} - {foundChapter.description}
            </p>
          </div>
          
          <Tabs defaultValue="content" value={activeTab} onValueChange={(v) => setActiveTab(v as 'content' | 'generator')} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="content" className="flex items-center justify-center space-x-2">
                <Book className="h-4 w-4" />
                <span>Chapter Content</span>
              </TabsTrigger>
              <TabsTrigger value="generator" className="flex items-center justify-center space-x-2">
                <Wand2 className="h-4 w-4" />
                <span>Content Generator</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-4">
              <ChapterContent chapter={foundChapter} subjectColor={subject.color} />
            </TabsContent>
            
            <TabsContent value="generator" className="mt-4 animate-fade-in">
              <ContentGenerator />
            </TabsContent>
          </Tabs>
          
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button variant="outline">Previous Chapter</Button>
            <Button className="bg-eduBlue hover:bg-eduBlue/90">Next Chapter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetailPage;
