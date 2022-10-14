import { createElement } from "../DomHelper.js";

export default function () {
    const menu = createElement("div", "menu");
    const header = document.createElement("h2");
    header.textContent = "Welcome to Menu Page";

    menu.appendChild(header);
    return menu
}