import { createElement, createLink } from './DomHelper.js';
import Nav from './Nav.js';
import Main from './Main.js';

const createHeader = () => {
    const el = createElement("div", "page-header");
    const header = document.createElement("header");
    header.textContent = "Sugar Rush Cafe"
    el.appendChild(header);
    return el
}

const createFooter = () => {
    const el = createElement("div", "page-footer");
    const footer = document.createElement("footer");
    const text = document.createTextNode("Not a real restaurant -by ");

    footer.appendChild(text);
    footer.appendChild(createLink("@mhanifmustakim", "https://github.com/mhanifmustakim"))
    el.appendChild(footer);
    return el
}

const createNavbar = () => {
    Nav.init();
    return Nav.node
}

const createMain = () => {
    Main.init();
    return Main.node
}

const initPage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createNavbar());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export { initPage }