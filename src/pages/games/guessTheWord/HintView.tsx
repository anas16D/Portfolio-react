import React, { useState } from 'react';
import { Hint } from '../guessTheWord/types';
import HintCard from './HintCard';


type HintViewProps = {
    hints: Hint[];
    maxHints: number;
    word?: string;
};

const HintView: React.FC<HintViewProps> = ({ hints, maxHints, word }) => {
    const [usedHints, setUsedHints] = useState<string[]>([]);

    const handleHintClick = (id: string, clickable: boolean) => {
        if (!clickable || usedHints.length >= maxHints || usedHints.includes(id)) return;
        setUsedHints([...usedHints, id]);
    };
    console.log("hints:", hints);


    const getHint = (hint: Hint): string => {
        console.log("Generating hint for:", hint, "with word:", word);
        if (!word) return "Word not available.";
        return getHintText(hint, word);
    }

    return (
        <section>
            <h3>Hints ({usedHints.length}/{maxHints})</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {hints.map((hint) => (
                    <li key={hint.id} style={{ margin: '1rem' }}>
                        <button
                            disabled={
                                !hint.clickable ||
                                usedHints.includes(hint.id) ||
                                usedHints.length >= maxHints
                            }
                            onClick={() => handleHintClick(hint.id, hint.clickable)}
                            style={{
                                cursor: hint.clickable && !usedHints.includes(hint.id) && usedHints.length < maxHints ? 'pointer' : 'not-allowed',
                                opacity: usedHints.includes(hint.id) ? 0.5 : 1,
                            }}
                        >
                            {/* {hint.text} */}
                            <HintCard hint={hint} getHint={getHint}/>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};
export default HintView;

const getHintText = (hint: Hint, word: string):string => {

    if(!hint.id){
        return "No hint available.";
    }


    switch(hint.id){
        case 'showFirstLetter':
            return `The first letter of the word is '${getFirstLetter(word)}'.`;
        case 'wordLength':
            return `The word is ${getWordLength(word)} letters long.`;
        case 'showLastLetter':
            return `The last letter of the word is '${getLastLetter(word)}'.`;
        case 'numberOfVowels':
            return `The word contains ${getNumberOfVowels(word)} vowels.`;
        case 'definition':
            return `${getDefinition()}`;
        case 'synonym':
            return `A synonym for the word is 'example'.`;
    }
    return "This is a hint text.";
}

    const getFirstLetter = (word: string): string => {
        return word ? word.charAt(0) : '';
    }
    const getLastLetter = (word: string): string => {
        return word ? word.charAt(word.length - 1) : '';
    }
    const getWordLength = (word: string): number => {
        console.log("Calculating word length for:", word);
        return word ? word.length : 0;
    }
    const getNumberOfVowels = (word: string): number => {
        if (!word) return 0;
        const vowels = word.match(/[aeiou]/gi);
        return vowels ? vowels.length : 0;
    }
    const getDefinition = (): string => {
        // Placeholder definition
        return "Definition not available.";
    }