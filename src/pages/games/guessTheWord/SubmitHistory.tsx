import React, { useEffect } from 'react';

type Guess = {
  word: string;
  result: string;
  remark?: string;
};

type SubmitHistoryProps = {
  guessedWord: string;
  word: string;
};

const SubmitHistory: React.FC<SubmitHistoryProps> = ({ guessedWord, word }) => {
  const [history, setHistory] = React.useState<Guess[]>([]);
  useEffect(() => {
    if (guessedWord) {
      const result = guessedWord === word ? 'Correct' : 'Incorrect';
      setHistory((prev) => [...prev, { word: guessedWord, result }]);
    }
  }, [guessedWord, word]);
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Guess History</h2>
      <ul className="space-y-3">
        {history.map((guess, idx) => (
          <li
            key={idx}
            className={`p-3 rounded border-l-4 ${
              guess.result === 'Correct'
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">{guess.word}</span>
              <span
                className={`ml-2 px-2 py-1 rounded text-xs font-bold ${
                  guess.result === 'Correct' ? 'bg-green-500 text-white' : 'bg-red-400 text-white'
                }`}
              >
                {guess.result}
              </span>
            </div>
            <div className="text-gray-600 mt-1 text-sm">
              {getWordAnalysis(guess.word, word)}
            </div>
          </li>
        ))}
      </ul>
      {history.length === 0 && (
        <p className="text-gray-500 italic text-center">No guesses submitted yet.</p>
      )}
      {word && history.some(h => h.result === 'Correct') && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded text-green-800 text-center font-semibold">
          Congratulations! You've guessed the word "{word}" correctly! in {history.findIndex(h => h.result === 'Correct') + 1} attempts.
        </div>
      )}
    </div>
  );
};

export default SubmitHistory;


const getWordAnalysis = (guessedWord: string, word: string): string => {
  if(guessedWord === word) {
    return "Perfect match!";
  }
    const correctLetters = getCorrectNumberOfLetters(guessedWord, word);
    return `You have ${correctLetters} letters in the correct position.`;
} 

const getCorrectNumberOfLetters = (guessedWord: string, word: string): number => {
  let correctCount = 0;
  const minLength = Math.min(guessedWord.length, word.length);
    for (let i = 0; i < minLength; i++) {
        if (guessedWord[i] === word[i]) {
            correctCount++;
        }
    }
    return correctCount;
}