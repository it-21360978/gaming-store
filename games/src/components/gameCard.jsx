import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GameCard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGamesData();
  }, []);

  const fetchGamesData = async () => {
    try {
      const response = await axios.get('http://localhost:3030/game/'); // Replace with your backend API endpoint
      if (response && response.data) {
        setGames(response.data);
      } else {
        console.log('No data found in the response.');
      }
    } catch (error) {
      console.log('Error fetching games data:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-blue-700 underline ml-4 font-serif font-semibold mt-4">Upcoming Games</h2>
      <br />
      <div className="grid grid-cols-3 gap-4 p-4">
        {games.map((game) => (
          <div key={game.id} className="w-auto max-w-sm border border-gray-500 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700 bg-gray-50">
            <div>
              <img className="p-8 rounded-t-lg h-60 w-full mx-auto" src={`http://localhost:3030/uploads/${encodeURIComponent(game.file)}`} alt="image" />
            </div>
            <div className="px-5 pb-5 mt-0 bottom-0">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white mt-3">{game.name}</span>
                <span className="mt-3 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{game.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
