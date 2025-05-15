
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Video, AudioLines, Gamepad, ArrowRight } from 'lucide-react';

const ContentGenerator = () => {
    const [type, setType] = useState('video');
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    // Simulate progress for better UX
    const simulateProgress = () => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + Math.random() * 10;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return newProgress;
            });
        }, 500);
        
        return () => clearInterval(interval);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResult(null);
        
        const progressCleanup = simulateProgress();
        
        try {
            const response = await axios.post('/api/generate', { 
                type, 
                data: type === 'video' ? { prompt: data } : 
                       type === 'audio' ? { text: data } : 
                       { topic: data }
            });
            
            setResult(response.data);
            toast({
                title: "Content Generated",
                description: `Your ${type} content has been successfully generated.`,
            });
        } catch (error) {
            console.error('Error:', error);
            toast({
                title: "Generation Failed",
                description: `There was an error generating your ${type} content.`,
                variant: "destructive",
            });
        } finally {
            progressCleanup();
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
    };

    const getTabIcon = () => {
        switch(type) {
            case 'video': return <Video className="h-5 w-5 mr-2" />;
            case 'audio': return <AudioLines className="h-5 w-5 mr-2" />;
            case 'game': return <Gamepad className="h-5 w-5 mr-2" />;
            default: return <Video className="h-5 w-5 mr-2" />;
        }
    };

    const getPlaceholder = () => {
        switch(type) {
            case 'video': 
                return 'Describe the educational video content... Example: "Create an engaging video explaining photosynthesis for 5th grade students, showing how plants convert sunlight to energy"';
            case 'audio': 
                return 'Enter text to convert to speech... Example: "The water cycle is the continuous movement of water within the Earth and atmosphere."';
            case 'game': 
                return 'Describe the educational game... Example: "Create a math game for practicing multiplication tables for grades 3-4"';
            default: 
                return 'Describe the content you want to generate...';
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md border-t-4 border-t-eduBlue animate-fade-in">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-eduBlue flex items-center justify-center">
                    {getTabIcon()}
                    Educational Content Generator
                </CardTitle>
                <CardDescription className="text-center">
                    Create custom educational materials for your students in minutes
                </CardDescription>
            </CardHeader>
            
            <CardContent>
                <Tabs defaultValue="video" value={type} onValueChange={setType} className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                        <TabsTrigger value="video" className="flex items-center">
                            <Video className="h-4 w-4 mr-2" />
                            <span>Animated Video</span>
                        </TabsTrigger>
                        <TabsTrigger value="audio" className="flex items-center">
                            <AudioLines className="h-4 w-4 mr-2" />
                            <span>Audio Narration</span>
                        </TabsTrigger>
                        <TabsTrigger value="game" className="flex items-center">
                            <Gamepad className="h-4 w-4 mr-2" />
                            <span>Educational Game</span>
                        </TabsTrigger>
                    </TabsList>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                {type === 'video' ? 'Video Description' : 
                                type === 'audio' ? 'Text to Narrate' : 
                                'Game Description'}
                            </label>
                            <Textarea
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                placeholder={getPlaceholder()}
                                className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-eduBlue focus:border-eduBlue"
                                disabled={isLoading}
                            />
                        </div>
                        
                        {isLoading && (
                            <div className="w-full space-y-2">
                                <p className="text-sm text-gray-500">
                                    {progress < 30 ? "Preparing your request..." : 
                                     progress < 70 ? `Generating ${type}...` : 
                                     "Finalizing your content..."}
                                </p>
                                <Progress value={progress} className="h-2" />
                            </div>
                        )}
                        
                        <Button 
                            type="submit" 
                            className="w-full bg-eduBlue hover:bg-eduBlue/90 text-white py-3 px-4 rounded-md transition-colors"
                            disabled={isLoading || !data.trim()}
                        >
                            {isLoading ? 
                                `Generating ${type.charAt(0).toUpperCase() + type.slice(1)}...` : 
                                `Generate ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </form>
                </Tabs>
            </CardContent>
            
            {result && (
                <CardFooter className="flex flex-col">
                    <div className="w-full mt-6 p-4 border rounded-md bg-gray-50 animate-fade-in">
                        <h3 className="text-lg font-medium mb-2 flex items-center">
                            {type === 'video' && <Video className="h-4 w-4 mr-2" />}
                            {type === 'audio' && <AudioLines className="h-4 w-4 mr-2" />}
                            {type === 'game' && <Gamepad className="h-4 w-4 mr-2" />}
                            Generated {type.charAt(0).toUpperCase() + type.slice(1)} Content:
                        </h3>
                        
                        {/* Video Result */}
                        {type === 'video' && result.data && (
                            <div className="space-y-3">
                                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={result.data.previewUrl || "https://via.placeholder.com/640x360?text=Video+Processing"} 
                                        alt="Video preview" 
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="font-medium">Prompt: <span className="font-normal">{result.data.prompt}</span></p>
                                <p className="text-sm text-gray-500">Estimated completion time: {result.data.estimatedTime}</p>
                            </div>
                        )}
                        
                        {/* Audio Result */}
                        {type === 'audio' && result.data && (
                            <div className="space-y-3">
                                <div className="bg-gray-100 rounded-lg p-3 flex items-center space-x-3">
                                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                                        <Video className="h-4 w-4" />
                                    </Button>
                                    <div className="flex-1">
                                        <div className="h-2 bg-gray-300 rounded-full">
                                            <div className="h-2 bg-eduBlue rounded-full w-1/3"></div>
                                        </div>
                                        <div className="flex justify-between mt-1">
                                            <span className="text-xs text-gray-500">0:00</span>
                                            <span className="text-xs text-gray-500">{result.data.duration || "1:20"}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-medium">Text: <span className="font-normal">{result.data.text}</span></p>
                            </div>
                        )}
                        
                        {/* Game Result */}
                        {type === 'game' && result.data && (
                            <div className="space-y-3">
                                <p className="font-medium">Topic: <span className="font-normal">{result.data.topic}</span></p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                    {result.data.games?.map((game, index) => (
                                        <Card key={index} className="hover:shadow-md transition-shadow">
                                            <CardHeader className="pb-2">
                                                <CardTitle className="text-lg">{game.name}</CardTitle>
                                                <CardDescription>Difficulty: {game.difficulty}</CardDescription>
                                            </CardHeader>
                                            <CardContent className="pt-0">
                                                <p className="text-sm">{game.description}</p>
                                                <p className="text-xs mt-2 text-gray-500">{game.instructions}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </CardFooter>
            )}
        </Card>
    );
};

export default ContentGenerator;
