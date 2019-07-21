export const message = 'Hello';

const app = document.getElementById('app') as HTMLDivElement;

const messageElement = document.createElement('p');
messageElement.textContent = message;

app.appendChild(messageElement);

export default message;
