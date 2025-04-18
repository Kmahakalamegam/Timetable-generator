import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Timetable</h1>
        <button
          onClick={() => navigate('/main-content')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
