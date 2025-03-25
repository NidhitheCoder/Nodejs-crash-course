const writeMessage = (text) => {
    const contentDiv = document.querySelector('.content')
    const messagePara = document.createElement('p');
    messagePara.textContent = text;

    contentDiv.appendChild(messagePara)
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector('#chat');
    const text = input.value;
    input.value = '';
    sock.emit('message', text)
}

const form = document.querySelector('#chat-form');
form.addEventListener('submit', onFormSubmit)

// initializing io object for socket
const sock = io();
sock.on('message', writeMessage)