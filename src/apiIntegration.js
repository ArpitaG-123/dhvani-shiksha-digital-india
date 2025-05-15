// filepath: c:\Users\Chinmaya K.N\OneDrive\Documents\GitHub\dhvani-shiksha-digital-india\src\apiIntegration.js
require('dotenv').config();
const axios = require('axios');

const VIDEO_API_KEY = process.env.VIDEO_API_KEY;
const AUDIO_API_KEY = process.env.AUDIO_API_KEY;
const GAME_API_KEY = process.env.GAME_API_KEY;

const API_URL = 'https://api.example.com/generate'; // Replace with the actual API URL

async function generateContent(type, data) {
    let apiKey;

    // Select the appropriate API key based on the type
    switch (type) {
        case 'video':
            apiKey = VIDEO_API_KEY;
            break;
        case 'audio':
            apiKey = AUDIO_API_KEY;
            break;
        case 'game':
            apiKey = GAME_API_KEY;
            break;
        default:
            throw new Error('Invalid content type');
    }

    try {
        const response = await axios.post(API_URL, {
            type: type,
            data: data,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        console.log('Generated Content:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error generating content:', error);
        throw error;
    }
}

// Example usage
generateContent('video', { animation: 'example-animation' });
generateContent('audio', { text: 'Hello, world!' });
generateContent('game', { level: 'easy' });