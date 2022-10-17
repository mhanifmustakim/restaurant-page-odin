import { createElement } from "../DomHelper.js";
import menuData from "./menu-data.js";

export default function () {
    const menu = createElement("div", "menu");
    const header = document.createElement("h2");
    header.classList.add("text-cursive");
    header.textContent = "Our Menu";

    const menuContainer = createElement("div", "menuContainer");
    for (let i = 0; i < menuData.length; i++) {
        const thisMenu = menuData[i];
        const div = document.createElement("section");
        div.classList.add("menu-section");

        const header = document.createElement("header");
        header.classList.add("text-cursive");
        header.textContent = thisMenu.type;
        div.appendChild(header);

        const menuItemContainer = document.createElement("ul");
        menuItemContainer.classList.add("menuItemContainer");
        div.appendChild(menuItemContainer);

        for (let item of thisMenu.items) {
            const section = document.createElement("li");
            section.classList.add("menu-item");

            const img = document.createElement("img");
            img.src = item.img;
            section.appendChild(img);

            const name = document.createElement("p");
            name.textContent = item.name;
            section.appendChild(name);

            menuItemContainer.appendChild(section);
        }

        menuContainer.appendChild(div);
    }

    menu.appendChild(header);
    menu.appendChild(menuContainer);
    return menu
}