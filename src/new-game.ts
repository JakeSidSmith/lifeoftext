import { Answer, Prompt } from './types';

let youDie: Prompt;

const newGameAnswers: ReadonlyArray<Answer> = [
  {
    match: 'I (do)? #Negative (want|like)? to? (play|start|begin)',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'I play #Negative',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'I do nothing',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'I would? (like|want|go)? to? (play|start|begin)',
    next: () => ({
      prompt: 'You begin to play the game! THE END...',
      answers: [],
      color: 'yellow',
    }),
  },
  {
    match: 'I #Verb',
    prePrompt: "Nice try, but we haven't started playing yet.",
    next: () => newGame,
  },
  {
    match: '(yeah|yes|uhuh|no|nope|nah|nothing)',
    next: () => ({
      prompt: 'Would _YOU_ like to play?',
      answers: newGameAnswers,
    }),
  },
];

youDie = {
  prompt: 'You die.\nWould you like to play again?',
  answers: newGameAnswers,
  color: 'red',
};

const newGame: Prompt = {
  prompt: 'Would you like to play?',
  answers: newGameAnswers,
};

export { newGame, youDie };
