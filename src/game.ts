import * as npl from 'compromise';

import { Answer, Prompt } from './types';
import { displayLines } from './utils';

const play = (
  messages: HTMLDivElement,
  input: HTMLInputElement,
  newGame: Prompt
) => {
  const history: Prompt[] = [newGame];

  const advance = (answer: Answer) => {
    const next = answer.next();
    history.push(next);

    if (answer.prePrompt) {
      displayLines(messages, answer.prePrompt, answer.color);
    }

    displayLines(messages, next.prompt, next.color);
  };

  const matchAnswers = (userInput: string) => {
    displayLines(messages, userInput, 'user-input');
    input.value = '';

    const lastPrompt = history[history.length - 1];

    for (const answer of lastPrompt.answers) {
      const match = npl(userInput);

      if (match.has(answer.match)) {
        return advance(answer);
      }
    }

    displayLines(messages, "I'm sorry, I don't understand.");
    displayLines(messages, lastPrompt.prompt, lastPrompt.color);
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      matchAnswers(input.value);
    }
  };

  const init = () => {
    input.addEventListener('keypress', handleKeyPress);
    displayLines(messages, newGame.prompt, newGame.color);
  };

  init();
};

export { play };
