import { play } from './game';
import { introduction } from './introduction';
import { newGame } from './new-game';
import { setup } from './setup';

const { messages, input } = setup();
introduction(messages);
play(messages, input, newGame);
