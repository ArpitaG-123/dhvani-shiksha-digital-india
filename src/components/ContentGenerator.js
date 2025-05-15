
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const ContentGenerator = () => {
    const [type, setType] = useState('video');
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('/api/generate', { 
                type, 
                data: type === 'video' ? { prompt: data } : data
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
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-eduBlue">Educational Content Generator</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Content Type</label>
                    <select 
                        value={type} 
                        onChange={(e) => setType(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-eduBlue focus:border-eduBlue"
                    >
                        <option value="video">Animated Video</option>
                        <option value="audio">Audio Narration</option>
                        <option value="game">Educational Game</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {type === 'video' ? 'Video Description' : 
                         type === 'audio' ? 'Text to Narrate' : 
                         'Game Description'}
                    </label>
                    <textarea
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder={
                            type === 'video' ? 'Describe the educational video content...' : 
                            type === 'audio' ? 'Enter text to convert to speech...' : 
                            'Describe the educational game...'
                        }
                        className="w-full p-2 border border-gray-300 rounded-md h-32 focus:ring-eduBlue focus:border-eduBlue"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-eduBlue text-white py-2 px-4 rounded-md hover:bg-eduBlue/90 transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Generating...' : `Generate ${type.charAt(0).toUpperCase() + type.slice(1)}`}
                </button>
            </form>
            {result && (
                <div className="mt-6 p-4 border rounded-md bg-gray-50">
                    <h3 className="text-lg font-medium mb-2">Result:</h3>
                    <pre className="whitespace-pre-wrap bg-white p-3 rounded border text-sm">
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
};

export default ContentGenerator;
