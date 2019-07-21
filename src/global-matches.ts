import { GlobalMatch } from './types';
import { youDie } from './you-die';

const GLOBAL_MATCHES: ReadonlyArray<GlobalMatch> = [
  {
    match: 'i kill myself',
    respond: () => youDie,
  },
  {
    match: 'i die',
    respond: () => youDie,
  },
  {
    match: 'i reload the (page|tab|window|browser|game)',
    respond: () => {
      window.location.reload();
      return 'You reload the page.';
    },
  },
  {
    match: '(this|your) game [*]',
    respond: match => {
      return `You know what really ${match
        .normalize({ whitespace: true })
        .out('normal')}?\nYou!`;
    },
  },
];

export { GLOBAL_MATCHES };
