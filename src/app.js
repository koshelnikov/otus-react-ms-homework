import html from "./app.html";


function getHelloWorldComponent() {
    const element = document.createElement('div');
    element.innerHTML = html;
    return element;
}


const rootElement = document.getElementById('root');
rootElement.appendChild(getHelloWorldComponent());