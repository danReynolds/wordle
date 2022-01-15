import { WORDS } from "../constants/wordlist";
import { VALIDGUESSES } from "../constants/validGuesses";

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  );
};

export const isWinningWord = (solution: string, guess: string) => {
  return solution === guess;
};

export const createSolution = () => { 
  const index = Math.floor(Math.random() * WORDS.length);

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
  };
};

