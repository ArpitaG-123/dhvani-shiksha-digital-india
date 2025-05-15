// filepath: c:\Users\Chinmaya K.N\OneDrive\Documents\GitHub\dhvani-shiksha-digital-india\src\components\ContentGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

const ContentGenerator = () => {
    const [type, setType] = useState('video');
    const [data, setData] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/generate', { type, data });
            setResult(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="video">Video</option>
                    <option value="audio">Audio</option>
                    <option value="game">Game</option>
                </select>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    placeholder="Enter data"
                />
                <button type="submit">Generate</button>
            </form>
            {result && <div>Result: {JSON.stringify(result)}</div>}
        </div>
    );
};

export default ContentGenerator;