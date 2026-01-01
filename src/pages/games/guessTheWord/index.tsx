import React, { useEffect, useState } from 'react';
import HintView from './HintView';
import { hints } from './data/GameData';
import SubmitHistory from './SubmitHistory';

const GuessTheWord: React.FC = () => {
  const [userGuess, setUserGuess] = useState('');
  const [word, setWord] = useState('');
  const [submittedGuess, setSubmittedGuess] = useState('');

  useEffect(() => {
    getTheWord().then((w) => setWord(w));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedGuess(e.target['word-input'].value);
    setUserGuess('');
    console.log('User guess:', submittedGuess);
  };
  console.log("word to guess:", word);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">Guess The Word</h1>
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-[1fr_auto]
        gap-6
        items-start
        max-w-6xl
        mx-auto
    "
      >
        <div className='flex-coloumn'>
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-md bg-white shadow-md rounded p-6"
        >
          <label htmlFor="word-input" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your guess
          </label>

          <input
            id="word-input"
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Type your guess..."
            className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded hover:cursor-pointer"
          >
            Submit Guess
          </button>
          
        </form>
        <SubmitHistory guessedWord={submittedGuess} word={word} />
        </div>
       

        {/* Hint section – right aligned */}
        {/* <div className="absolute top-24 right-6 w-64 bg-red-000"> */}
        <div className="w-full max-w-sm mx-auto lg:mx-0">
          <HintView hints={hints} maxHints={3} word={word} />
        </div>
         {word && <div className="text-center text-gray-600">(Debug) The word to guess is: <strong>{word}</strong></div>}
      </div>
    </div>
  );
};

export default GuessTheWord;

export async function getTheWord(): Promise<string> {
  const response = await fetch('/words.txt');
  // const text = await response.text();
  // const words = text.split('\n').map(word => word.trim()).filter(word => word.length > 0);
  // const randomIndex = Math.floor(Math.random() * words.length);
  // return words[randomIndex];
  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let buffer = '';

  let min = 1;
  let max = 370105;
  let randomWordIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split(/[\n\r]/).filter((line) => line.trim().length > 2);

    if (lines.length >= randomWordIndex) {
      return lines[randomWordIndex - 1].trim();
    } else {
      randomWordIndex -= lines.length;
    }

    // console.log("lines:", lines);
    // if (lines.length > 1) {
    //     return lines[0].trim();
    // }

    buffer = lines[lines.length - 1];
  }

  return buffer.trim();
}
