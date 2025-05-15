import React, { useState } from 'react';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const GeminiChat: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setAnswer('');
    try {
      const res = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: question }] }]
        })
      });
      if (!res.ok) throw new Error('Failed to get response from Gemini AI');
      const data = await res.json();
      setAnswer(data.candidates?.[0]?.content?.parts?.[0]?.text || 'No answer received.');
    } catch (err: any) {
      setError('Error: ' + (err.message || 'Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 p-4 bg-white rounded shadow border max-w-xl mx-auto">
      <h2 className="text-lg font-bold mb-2 text-eduBlue">Ask Gemini AI (Doubt Clarification)</h2>
      <form onSubmit={handleAsk} className="flex flex-col gap-2">
        <input
          type="text"
          className="border rounded px-3 py-2"
          placeholder="Type your question..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-eduBlue text-white px-4 py-2 rounded hover:bg-eduBlue/90"
          disabled={loading}
        >
          {loading ? 'Asking Gemini...' : 'Ask Gemini'}
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {answer && (
        <div className="mt-4 p-3 bg-gray-50 border rounded">
          <span className="font-semibold text-eduPurple">Gemini:</span> {answer}
        </div>
      )}
    </div>
  );
};

export default GeminiChat; 