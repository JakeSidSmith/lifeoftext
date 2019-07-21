const setup = () => {
  const app = document.getElementById('app') as HTMLDivElement;

  const messages = document.createElement('div');
  messages.className = 'messages';
  app.appendChild(messages);

  const input = document.createElement('input');
  input.className = 'input';
  input.placeholder = 'What do you do?';
  app.appendChild(input);
  input.focus();

  return {
    messages,
    input,
  };
};

export { setup };
