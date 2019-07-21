import { NBSP } from './constants';

const displayLines = (
  messages: HTMLDivElement,
  text: string,
  className?: string
) => {
  const lines = text.split('\n');

  lines.forEach(line => {
    const element = document.createElement('p');
    if (className) {
      element.className = className;
    }
    element.textContent = line ? line : NBSP;
    messages.appendChild(element);
  });

  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  window.scrollTo(0, scrollHeight);
};

export { displayLines };
