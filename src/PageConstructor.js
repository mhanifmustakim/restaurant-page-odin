import Nav from './Nav.js'

let mainContent;
const createElement = (tag, id) => {
    const el = document.createElement(tag);
    el.setAttribute("id", id);
    return el
}

const createLink = (text, src) => {
    const el = document.createElement("a");
    el.setAttribute("target", "_blank");
    el.setAttribute("href", src);
    el.textContent = text;
    return el
}

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
    mainContent = createElement("div", "page-main")
    return mainContent
}

const initPage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createNavbar());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export { initPage, createElement }