import { NBSP } from './constants';

const INTRODUCTION = [
  'Welcome! To play the game simply type what you would like to do, for example:',
  'I walk forward.',
  'I look around.',
  'I eat an apple.',
  NBSP,
];

const introduction = (messages: HTMLDivElement) => {
  INTRODUCTION.forEach(text => {
    const element = document.createElement('p');
    element.textContent = text;
    messages.appendChild(element);
  });
};

export { introduction };
