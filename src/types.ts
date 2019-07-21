import * as npl from 'compromise';

export type Color = 'red' | 'yellow';

export interface Answer {
  match: string;
  next: () => Prompt;
  prePrompt?: string;
  color?: Color;
}

export interface Prompt {
  prompt: string;
  answers: ReadonlyArray<Answer>;
  color?: Color;
}

export interface GlobalMatch {
  match: string;
  respond: (match: npl.Text) => string | Prompt;
}
