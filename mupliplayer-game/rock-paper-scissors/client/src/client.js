const writeMessage = (text) => {
    const contentDiv = document.querySelector('.content')
    const messagePara = document.createElement('p');
    messagePara.textContent = text;

    contentDiv.appendChild(messagePara)
}

writeMessage("Welcome to RPS world!")