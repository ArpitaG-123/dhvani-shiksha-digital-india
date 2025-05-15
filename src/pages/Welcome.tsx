
import React from 'react';
import { Button } from '@/components/ui/button';
import OnboardingForm from '@/components/OnboardingForm';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-eduBlue to-eduPurple p-3 rounded-lg inline-block">
                <span className="text-white text-3xl font-bold">E</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-eduBlue">Edu</span>
              <span className="text-eduPurple">Dhvani</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              An interactive learning platform designed for students across India with
              personalized, curriculum-aligned content in your local language.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-eduBlue/10 rounded-lg px-3 py-2 text-sm text-eduBlue flex items-center">
                <span className="mr-1">📚</span> State Board Aligned
              </div>
              <div className="bg-eduGreen/10 rounded-lg px-3 py-2 text-sm text-eduGreen flex items-center">
                <span className="mr-1">🔊</span> Voice Summaries
              </div>
              <div className="bg-eduOrange/10 rounded-lg px-3 py-2 text-sm text-eduOrange flex items-center">
                <span className="mr-1">🎮</span> Interactive Learning
              </div>
              <div className="bg-eduPurple/10 rounded-lg px-3 py-2 text-sm text-eduPurple flex items-center">
                <span className="mr-1">📱</span> Works Offline
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Get Started</h2>
              <OnboardingForm />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Why EduDhvani?</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-3 shrink-0">
                      <div className="bg-eduBlue/20 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-eduBlue">1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">State Board Aligned</h3>
                      <p className="text-gray-600">Content precisely mapped to your state's curriculum</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 shrink-0">
                      <div className="bg-eduGreen/20 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-eduGreen">2</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Interactive Learning</h3>
                      <p className="text-gray-600">Engaging videos, quizzes, and games make learning fun</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 shrink-0">
                      <div className="bg-eduOrange/20 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-eduOrange">3</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Language Support</h3>
                      <p className="text-gray-600">Learn in your local language with voice summaries</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-3 shrink-0">
                      <div className="bg-eduPurple/20 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-eduPurple">4</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Works Offline</h3>
                      <p className="text-gray-600">Download content to learn even without internet</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
