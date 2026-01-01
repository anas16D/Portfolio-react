import { Hint } from '../types';

export const hints: Hint[] = [
    {
        id : 'showFirstLetter',
        text: 'Show the first letter of the word.',
        clickable: true,
    },
    {
        id : 'wordLength',
        text: 'Show the length of the word.',
        clickable: true,
    },
    {
        id: 'showLastLetter',
        text: 'Show the last letter of the word.',
        clickable: true,
    },
    {
        id: 'numberOfVowels',
        text: 'Show the number of vowels in the word.',
        clickable: true,
    },
    {
        id: 'definition',
        text: 'Provide the definition of the word.',
        clickable: false,
    },
    {
        id: 'synonym',
        text: 'Provide a synonym for the word.',
        clickable: false,
    }
];