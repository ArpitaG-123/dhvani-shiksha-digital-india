import React, { useState } from 'react';
import { Sparkles, BookOpen, TrendingUp, RefreshCw } from 'lucide-react';

const aiTools = [
  {
    name: 'ChatGPT',
    description: 'A conversational AI developed by OpenAI, used for answering questions, tutoring, and content generation.',
    url: 'https://chat.openai.com/'
  },
  {
    name: 'Google Gemini (Bard)',
    description: "Google's generative AI for research, writing, and learning support.",
    url: 'https://gemini.google.com/'
  },
  {
    name: 'QuillBot',
    description: 'An AI-powered paraphrasing and grammar checking tool for students and writers.',
    url: 'https://quillbot.com/'
  },
  {
    name: 'Khanmigo',
    description: "Khan Academy's AI-powered tutor and learning assistant.",
    url: 'https://www.khanacademy.org/khan-labs'
  },
  {
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, clarity, and style suggestions.',
    url: 'https://grammarly.com/'
  },
  {
    name: 'Socratic by Google',
    description: 'AI-powered homework help app for students, using Google AI to explain concepts and solve problems.',
    url: 'https://socratic.org/'
  },
  {
    name: 'Perplexity AI',
    description: 'An AI-powered search and Q&A tool for research and learning.',
    url: 'https://www.perplexity.ai/'
  }
];

const edTechUpdates = [
  {
    title: 'AI in Classrooms',
    summary: 'Schools are increasingly adopting AI-powered tools for personalized learning, automated grading, and student support.'
  },
  {
    title: 'Adaptive Learning Platforms',
    summary: "Platforms like DreamBox and Smart Sparrow use AI to adapt content to each student's pace and understanding."
  },
  {
    title: 'EdTech Investment Growth',
    summary: 'Global investment in EdTech reached $20B in 2023, with a focus on AI, gamification, and remote learning.'
  },
  {
    title: 'AI for Accessibility',
    summary: 'AI tools are making education more accessible for students with disabilities, including real-time captioning and text-to-speech.'
  },
  {
    title: 'AI-Generated Content in Exams',
    summary: 'Universities are developing new policies to address the use of AI-generated content in student assessments.'
  },
  {
    title: 'Virtual Reality in Classrooms',
    summary: 'VR and AR are being used to create immersive learning experiences, especially in science and history.'
  },
  {
    title: 'AI Tutors for All',
    summary: 'Affordable AI tutors are now available to students worldwide, bridging gaps in access to quality education.'
  }
];

const newsHeadlines = [
  'OpenAI launches GPT-5 beta for select researchers.',
  'Google Gemini now supports multimodal input for students.',
  'India announces $1B EdTech innovation fund.',
  'UNESCO releases guidelines for ethical AI in education.',
  'Duolingo integrates AI voice for language practice.',
  'Coursera partners with top universities for AI-driven courses.',
  'AI-powered plagiarism detection tools see record adoption.',
  'Microsoft launches Reading Coach AI for schools.'
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const rawData = [
  'Over 60% of teachers in the US have used AI tools in the classroom (2023 survey).',
  'AI-powered language learning apps saw a 40% increase in downloads in 2023.',
  "India's EdTech market is projected to reach $10B by 2025, with strong AI adoption.",
  'Top skills for future jobs: AI literacy, data analysis, digital communication.',
  'More than 500 EdTech startups launched globally in 2023.',
  'AI chatbots now handle 30% of student support queries in online universities.'
];

const AIToolsAndEdTechUpdates: React.FC = () => {
  const [shuffledNews, setShuffledNews] = useState(() => shuffleArray(newsHeadlines).slice(0, 4));

  const handleRefresh = () => {
    setShuffledNews(shuffleArray(newsHeadlines).slice(0, 4));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-eduBlue mb-8 text-center flex items-center justify-center gap-2">
          <Sparkles className="inline w-8 h-8 text-eduPurple" /> AI Tools & EdTech News
        </h1>
        <section className="mb-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-eduPurple flex items-center gap-2"><TrendingUp className="w-6 h-6 text-eduGreen" /> Latest News</h2>
            <button onClick={handleRefresh} className="flex items-center gap-1 px-3 py-1 bg-eduBlue text-white rounded hover:bg-eduBlue/90 text-sm font-semibold"><RefreshCw className="w-4 h-4" /> Refresh</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shuffledNews.map((headline, idx) => (
              <div key={idx} className="bg-eduBlue/10 border-l-4 border-eduBlue rounded p-4 flex items-center gap-3 shadow-sm">
                <BookOpen className="w-8 h-8 text-eduBlue flex-shrink-0" />
                <span className="text-base text-eduBlue font-medium">{headline}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-eduPurple mb-4 flex items-center gap-2"><Sparkles className="w-6 h-6 text-eduPurple" /> Popular AI Tools for Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTools.map(tool => (
              <div key={tool.name} className="bg-eduPurple/5 border-l-4 border-eduPurple rounded p-4 shadow-sm">
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-eduBlue hover:underline">{tool.name}</a>
                <p className="text-gray-700 mt-1">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-eduPurple mb-4 flex items-center gap-2"><TrendingUp className="w-6 h-6 text-eduGreen" /> Recent Updates in Education Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {edTechUpdates.map(update => (
              <div key={update.title} className="bg-eduGreen/5 border-l-4 border-eduGreen rounded p-4 shadow-sm">
                <span className="text-lg font-bold text-eduBlue">{update.title}</span>
                <p className="text-gray-700 mt-1">{update.summary}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-eduGreen mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5 text-eduGreen" /> Raw Data & Trends</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {rawData.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AIToolsAndEdTechUpdates; 