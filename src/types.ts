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
