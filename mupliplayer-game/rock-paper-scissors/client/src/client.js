const writeMessage = (text) => {
    const contentDiv = document.querySelector('.content')
    const messagePara = document.createElement('p');
    messagePara.textContent = text;
    
    contentDiv.appendChild(messagePara)
}

// initializing io object for socket
const sock = io();
sock.on('message', writeMessage)