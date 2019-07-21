import { Answer, Prompt } from './types';

const newGameAnswers: ReadonlyArray<Answer> = [
  {
    match: 'i (do|would)? #Negative (want|like)? to? (play|start|begin)',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'i play #Negative',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'i do nothing',
    prePrompt: 'You do nothing...',
    next: () => youDie,
  },
  {
    match: 'i would? (like|want|go)? to? (play|start|begin)',
    next: () => ({
      prompt: 'You begin to play the game! THE END...',
      answers: [],
      color: 'yellow',
    }),
  },
  {
    match: 'i #Verb',
    prePrompt: "Nice try, but we haven't started playing yet.",
    next: () => ({
      prompt: 'Would you like to play?',
      answers: newGameAnswers,
    }),
  },
  {
    match: '(yeah|yes|uhuh|no|nope|nah|nothing)',
    next: () => ({
      prompt: 'Would _YOU_ like to play?',
      answers: newGameAnswers,
    }),
  },
];

const youDie: Prompt = {
  prompt: 'You die.\nWould you like to play again?',
  answers: newGameAnswers,
  color: 'red',
};

export { youDie, newGameAnswers };
