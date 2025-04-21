import React from 'react';

function Rewards() {
  return (
    <div className="min-h-screen relative" style={{ 
      backgroundImage: `url(/src/assets/rewards.jpeg)`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Rewards</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Your rewards will appear here.</p>
      </div>
    </div>
  );
}

export default Rewards;