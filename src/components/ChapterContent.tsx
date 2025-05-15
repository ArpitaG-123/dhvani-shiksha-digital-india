
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Chapter } from '@/data/subjectsData';
import { useToast } from '@/components/ui/use-toast';
import { Video, Headphones, FileText, BarChart, Gamepad } from 'lucide-react';

interface ChapterContentProps {
  chapter: Chapter;
  subjectColor: string;
}

const ChapterContent: React.FC<ChapterContentProps> = ({ chapter, subjectColor }) => {
  const { toast } = useToast();

  const notifyFeatureComingSoon = () => {
    toast({
      title: "Feature Coming Soon",
      description: "This feature is under development. Check back later!",
    });
  };

  return (
    <Card className="shadow-md border-t-4" style={{ borderTopColor: `var(--${subjectColor.replace('bg-', '')})` }}>
      <CardHeader>
        <CardTitle className="text-xl">{chapter.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="video">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="video" disabled={!chapter.hasVideo}>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span className="hidden sm:inline">Animated Video</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="audio" disabled={!chapter.hasAudio}>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                <span className="hidden sm:inline">Audio</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="notes">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Notes</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="quiz" disabled={!chapter.hasQuiz}>
              <div className="flex items-center gap-2">
                <BarChart className="h-4 w-4" />
                <span className="hidden sm:inline">Quiz</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="game" disabled={!chapter.hasGame}>
              <div className="flex items-center gap-2">
                <Gamepad className="h-4 w-4" />
                <span className="hidden sm:inline">Games</span>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="video" className="py-4">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-white animate-pulse-subtle">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-eduBlue border-b-8 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-600">Click to play video lesson</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Video Transcript</h3>
              <p className="text-gray-700">
                This is a placeholder for the video transcript. In a real implementation, 
                this would contain the full text transcript of the educational video.
              </p>
              <Button onClick={notifyFeatureComingSoon}>
                Download Video for Offline Viewing
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="audio" className="py-4">
            <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center space-x-3">
              <div className="w-12 h-12 bg-eduBlue rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90">
                <div className="w-0 h-0 border-t-6 border-t-transparent border-l-12 border-l-white border-b-6 border-b-transparent ml-1"></div>
              </div>
              <div className="flex-1">
                <div className="h-2 bg-gray-300 rounded-full">
                  <div className="h-2 bg-eduBlue rounded-full w-0"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">0:00</span>
                  <span className="text-xs text-gray-500">5:30</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Audio Summary</h3>
              <p className="text-gray-700">
                This audio summary explains the key concepts of {chapter.title} in simple language. 
                Listen to this to quickly grasp the main points.
              </p>
              <div className="mt-4">
                <Button onClick={notifyFeatureComingSoon}>
                  Download Audio Summary
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="py-4 space-y-4">
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold">Key Points</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>First important concept about {chapter.title}</li>
                <li>Second key point to remember</li>
                <li>Third essential element of the chapter</li>
                <li>Fourth crucial concept to understand</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-4">Detailed Notes</h3>
              <p>
                This section contains detailed notes about {chapter.title}. In a real implementation,
                this would include comprehensive explanations, examples, and diagrams to help students 
                understand the concepts thoroughly.
              </p>
              
              <h3 className="text-lg font-semibold mt-4">Examples</h3>
              <div className="bg-gray-100 p-3 rounded-md">
                <p className="font-medium">Example 1:</p>
                <p className="mt-1">Description of the first example related to {chapter.title}.</p>
              </div>
            </div>
            <div className="mt-4">
              <Button onClick={notifyFeatureComingSoon}>
                Download PDF Notes
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="quiz" className="py-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Practice Quiz</h3>
                <p className="mb-4">Test your understanding of {chapter.title} with these practice questions.</p>
              </div>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-2">Question 1:</p>
                  <p className="mb-3">This is a sample question about {chapter.title}?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-a" name="q1" className="h-4 w-4" />
                      <label htmlFor="q1-a">Option A</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-b" name="q1" className="h-4 w-4" />
                      <label htmlFor="q1-b">Option B</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-c" name="q1" className="h-4 w-4" />
                      <label htmlFor="q1-c">Option C</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q1-d" name="q1" className="h-4 w-4" />
                      <label htmlFor="q1-d">Option D</label>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <p className="font-medium mb-2">Question 2:</p>
                  <p className="mb-3">This is another sample question related to {chapter.title}?</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-a" name="q2" className="h-4 w-4" />
                      <label htmlFor="q2-a">Option A</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-b" name="q2" className="h-4 w-4" />
                      <label htmlFor="q2-b">Option B</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-c" name="q2" className="h-4 w-4" />
                      <label htmlFor="q2-c">Option C</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="q2-d" name="q2" className="h-4 w-4" />
                      <label htmlFor="q2-d">Option D</label>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className={`w-full ${subjectColor} hover:opacity-90 text-white`}
                onClick={notifyFeatureComingSoon}
              >
                Check Answers
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="game" className="py-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Educational Games</h3>
                <p className="mb-4">Learn {chapter.title} concepts through fun interactive games.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                    <Gamepad className="h-12 w-12 text-gray-400" />
                  </div>
                  <h4 className="font-medium text-lg">Matching Game</h4>
                  <p className="text-sm text-gray-600">Match related concepts to test your understanding.</p>
                </div>
                
                <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
                    <Gamepad className="h-12 w-12 text-gray-400" />
                  </div>
                  <h4 className="font-medium text-lg">Word Puzzle</h4>
                  <p className="text-sm text-gray-600">Find hidden words related to this chapter.</p>
                </div>
              </div>
              
              <Button 
                className={`w-full ${subjectColor} hover:opacity-90 text-white`}
                onClick={notifyFeatureComingSoon}
              >
                Play Games
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ChapterContent;
