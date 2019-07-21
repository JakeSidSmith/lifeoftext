import { displayLines } from './utils';

const INTRODUCTION =
  'Welcome! To play the game simply type what you would like to do, for example:\nI walk forward.\nI look around.\nI eat an apple.\n';

const introduction = (messages: HTMLDivElement) => {
  displayLines(messages, INTRODUCTION);
};

export { introduction };
