import { Prompt } from './types';
import { newGameAnswers } from './you-die';

const newGame: Prompt = {
  prompt: 'Would you like to play?',
  answers: newGameAnswers,
};

export { newGame };
