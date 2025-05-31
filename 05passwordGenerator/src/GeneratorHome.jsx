import React, { useState } from 'react';
import App from './App.jsx'; 
import UserGenerator from './UserGenerator.jsx'; 

function GeneratorHome() {
  const [activeTab, setActiveTab] = useState('username'); 

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <div className="flex space-x-4 mb-52">
        <button
          onClick={() => setActiveTab('username')}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === 'username'
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Username Generator
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`px-6 py-2 rounded-full transition ${
            activeTab === 'password'
              ? 'bg-emerald-500 text-white'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Password Generator
        </button>
      </div>

      {activeTab === 'username' ? <UserGenerator /> : <App />}
    </div>
  );
}

export default GeneratorHome;
