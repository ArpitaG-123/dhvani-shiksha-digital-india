import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { useStudent } from '@/contexts/StudentContext';
import { subjects } from '@/data/subjectsData';
import GeminiChat from '@/components/GeminiChat';

const SAMPLE_VIDEO_URL = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
const SAMPLE_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
const SAMPLE_GAME_URL = 'https://www.coolmathgames.com/0-math-memory';

const ALGEBRA_VIDEO_URL = 'https://www.youtube.com/embed/ihW4l0fTqAc';
const ALGEBRA_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3';
const ALGEBRA_GAME_URL = 'https://www.mathplayground.com/AlgebraMeltdown/index.html';

const PHOTOSYNTHESIS_VIDEO_URL = 'https://www.youtube.com/embed/D1Ymc311XS8';
const PHOTOSYNTHESIS_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
const PHOTOSYNTHESIS_GAME_URL = 'https://www.turtlediary.com/game/photosynthesis-process.html';

const SOCIAL_VIDEO_URL = 'https://www.youtube.com/embed/UFC4nDESV30';
const SOCIAL_GAME_URL = 'https://www.eduplace.com/kids/socsci/';

const AMBEDKAR_VIDEO_URL = 'https://www.youtube.com/embed/kcBbqA92hkk';
const AMBEDKAR_GAME_URL = 'https://www.topschools.in/quiz/dr-b-r-ambedkar-quiz/';

const ECONOMICS_VIDEO_URL = 'https://www.youtube.com/embed/Eym-gE2zXxM';
const ECONOMICS_GAME_URL = 'https://www.econedlink.org/resources/online-economic-games/';

const NATIONALISM_VIDEO_URL = 'https://www.youtube.com/embed/TB5F6zWSZ5E';
const NATIONALISM_GAME_URL = SOCIAL_GAME_URL;

const SubjectDetailPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const { student } = useStudent();
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!student) {
      navigate('/');
    }
  }, [student, navigate]);

  if (!student || !subjectId) {
    return null;
  }

  const subject = subjects.find(s => s.id === subjectId);
  if (!subject) {
    navigate('/subjects');
    return null;
  }

  const handleGenerateContent = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setContent(null);
    setTimeout(() => {
      const t = topic.trim().toLowerCase();
      if (t === 'algebra') {
        setContent({
          video: { url: ALGEBRA_VIDEO_URL, type: 'youtube' },
          audio: { url: ALGEBRA_VIDEO_URL, type: 'youtube' },
          game: { url: ALGEBRA_GAME_URL }
        });
      } else if (t === 'photosynthesis') {
        setContent({
          video: { url: PHOTOSYNTHESIS_VIDEO_URL, type: 'youtube' },
          audio: { url: PHOTOSYNTHESIS_VIDEO_URL, type: 'youtube' },
          game: { url: PHOTOSYNTHESIS_GAME_URL }
        });
      } else if (t === 'nationalism') {
        setContent({
          video: { url: NATIONALISM_VIDEO_URL, type: 'youtube' },
          audio: { url: NATIONALISM_VIDEO_URL, type: 'youtube' },
          game: { url: NATIONALISM_GAME_URL }
        });
      } else if (t === 'hindi') {
        setContent({
          video: { url: AMBEDKAR_VIDEO_URL, type: 'youtube' },
          audio: { url: AMBEDKAR_VIDEO_URL, type: 'youtube' },
          game: { url: AMBEDKAR_GAME_URL }
        });
      } else if (t === 'economics') {
        setContent({
          video: { url: ECONOMICS_VIDEO_URL, type: 'youtube' },
          audio: { url: ECONOMICS_VIDEO_URL, type: 'youtube' },
          game: { url: ECONOMICS_GAME_URL }
        });
      } else {
        setContent({
          video: { url: SAMPLE_VIDEO_URL, type: 'video' },
          audio: { url: SAMPLE_AUDIO_URL },
          game: { url: SAMPLE_GAME_URL }
        });
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-3xl">{subject.icon}</span>
            <h1 className="text-3xl font-bold">{subject.name}</h1>
          </div>
          <p className="text-gray-600 mb-8">
            Enter a topic you want to learn about in {subject.name} (Grade {student.grade}):
          </p>
          <form onSubmit={handleGenerateContent} className="mb-8">
            <input
              type="text"
              className="border rounded px-4 py-2 w-full mb-4"
              placeholder="e.g. Photosynthesis, Algebra, World War II..."
              value={topic}
              onChange={e => setTopic(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-eduBlue text-white px-6 py-2 rounded hover:bg-eduBlue/90"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Content'}
            </button>
          </form>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {content && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Animated Video</h2>
                <div className="bg-gray-200 rounded flex items-center justify-center" style={{ minHeight: 240 }}>
                  {content.video.type === 'youtube' ? (
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                      <iframe
                        src={content.video.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      ></iframe>
                    </div>
                  ) : (
                    <video src={content.video.url} controls className="w-full h-full" style={{ minHeight: 240 }} />
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Audio Summary</h2>
                <div className="bg-gray-100 rounded flex items-center justify-center" style={{ minHeight: 40 }}>
                  {content.audio.type === 'youtube' ? (
                    <div style={{ width: '100%' }}>
                      <iframe
                        src={content.audio.url}
                        title="YouTube audio player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: 40, borderRadius: 8 }}
                      ></iframe>
                      <div className="text-xs text-gray-500 mt-1">Audio only (YouTube)</div>
                    </div>
                  ) : (
                    <audio src={content.audio.url} controls className="w-full" />
                  )}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Games</h2>
                <div className="bg-gray-100 rounded h-24 flex items-center justify-center">
                  <a href={content.game.url} target="_blank" rel="noopener noreferrer" className="text-eduBlue underline">Play Game</a>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-eduBlue to-eduPurple text-white px-6 py-2 rounded shadow hover:opacity-90 font-semibold"
                  style={{ textDecoration: 'none' }}
                >
                  Ask Gemini AI (Doubt Clarification)
                </a>
              </div>
            </div>
          )}
          <GeminiChat />
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailPage;
