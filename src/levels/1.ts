import { Answer, Prompt } from '../types';
import { youDie } from '../you-die';

const noCanDoAnswers: ReadonlyArray<Answer> = [
  {
    match: 'i (look|see)',
    next: () => ({ ...level1, prompt: 'You have no eyes.' }),
  },
  {
    match: 'i (walk|run)',
    next: () => ({ ...level1, prompt: 'You have no legs.' }),
  },
  {
    match: 'i (feel|touch|reach)',
    next: () => ({ ...level1, prompt: 'You have no arms' }),
  },
];

const moveForwards: Prompt = {
  prompt:
    'You move forward, but there is still much space ahead of you.\nThe other beings appear to be heading this way.',
  answers: [...noCanDoAnswers],
};

const moveLeft: Prompt = {
  prompt:
    'You move to your left and bump into a wall of some kind. It feels squishy.',
  answers: [...noCanDoAnswers],
};

const moveRight: Prompt = {
  prompt:
    'You move to your right and bump into a wall of some kind. It feels squishy.',
  answers: [...noCanDoAnswers],
};

const initialSwimAnswers: ReadonlyArray<Answer> = [
  {
    match: 'i (swim|move) (forward|forwards)',
    next: () => moveForwards,
  },
  {
    match: 'i (swim|move) (back|backwards)',
    prePrompt:
      'You move backwards and slip through an opening.\nYou fall a great height.\nYou land, and after some time you feel your body weakening as you gradually dehydrate.',
    color: 'red',
    next: () => youDie,
  },
  {
    match: 'i (swim|move) left',
    next: () => moveLeft,
  },
  {
    match: 'i (swim|move) right',
    next: () => moveRight,
  },
  {
    match: 'i (turn|spin) around',
    next: () => ({
      prompt: 'You spin 360 degrees, but you still have no idea where you are.',
      answers: [...noCanDoAnswers, ...initialSwimAnswers],
    }),
  },
  {
    match: 'i (swim|move)$',
    next: () => ({
      prompt: 'You wiggle on the spot.',
      answers: [...noCanDoAnswers, ...initialSwimAnswers],
    }),
  },
];

const level1: Prompt = {
  prompt:
    'You are in a cramped space surrounded by other beings.\nSuddenly you are thrust forward with extreme force.\nYou are throw into a much larger space, still surrounded by other beings.',
  answers: [...noCanDoAnswers, ...initialSwimAnswers],
};

export { level1 };
