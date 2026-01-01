import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import GuessTheWord from "./guessTheWord";

const games = [
    { id: "guessTheWord", name: "Guess The Word" },
  
];
const gameRoutes = {
  guessTheWord: <GuessTheWord />
};

const GamesPage: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleGameSelect = (gameId: string) => {
        navigate(`/games/${gameId}`);
    };

    console.log("Selected game ID:", gameRoutes[id]);
    if (id) {
        return (
            <>
            <div className="max-w-md mx-auto mt-2 p-1 bg-gray-800 rounded-xl border border-gray-800 text-center">
                <h1 className="text-3xl font-bold text-indigo-400 mb-8">Playing: {games.find(game => game.id === id)?.name}</h1>
                <button
                    onClick={() => navigate('/games')}
                    className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 hover:cursor-pointer transition-colors duration-200 mb-4"
                >
                    Back to Game List
                </button>
                
            </div>
            {gameRoutes[id]}
            </>
        );
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-8 bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 text-center">
            <h1 className="text-3xl font-bold text-indigo-400 mb-8">Game List</h1>
            <ul className="space-y-6">
                {games.map((game) => (
                    <li key={game.id}>
                        <button
                            onClick={() => handleGameSelect(game.id)}
                            className="w-full py-3 px-6 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 hover:scale-105 hover:cursor-pointer"
                        >
                            {game.name}
                        </button>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default GamesPage;