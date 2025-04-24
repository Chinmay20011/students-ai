import React from 'react';
import { Link } from 'react-router-dom';
import { Puzzle } from 'lucide-react';

const Games = () => {
  const games = [
    {
      id: 1,
      title: "Memory Match",
      description: "Match pairs of cards in this classic memory game",
      image: "https://media.istockphoto.com/id/1427286707/photo/light-bulb-on-yellow-background-inspiration-and-creative-idea-concept.jpg?s=612x612&w=0&k=20&c=trOuKMYWNTlxODSAuvs1577nvv0paA_hmoB8HvzFRZY=",
      path: "/memory-game"
    },
  ];

  return (
    <div 
      className="min-h-screen" 
      style={{
        backgroundImage: `url(/src/assets/games.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="p-6 bg-black bg-opacity-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Link to={game.path} key={game.id} className="group">
              <div className="glass-effect rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02]">
                <div className="relative h-48 bg-gray-900">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${game.image})` }}></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {game.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                  <p className="text-gray-300">{game.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;