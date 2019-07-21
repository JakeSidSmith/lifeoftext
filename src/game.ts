import * as npl from 'compromise';

import { GLOBAL_MATCHES } from './global-matches';
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
        advance(answer);
        return;
      }
    }

    for (const globalMatch of GLOBAL_MATCHES) {
      const match = npl(userInput);

      if (match.has(globalMatch.match)) {
        const response = globalMatch.respond(match.match(globalMatch.match));
        if (typeof response === 'string') {
          displayLines(messages, response);
          return;
        }

        history.push(response);
        displayLines(messages, response.prompt, response.color);
        return;
      }
    }

    displayLines(
      messages,
      "I'm sorry, I don't understand.\nLet's try that again..."
    );
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
