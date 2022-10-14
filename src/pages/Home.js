import HomePageImage from "/src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg";
import { addClasses, createElement } from '../DomHelper.js';

export default function () {
    const home = createElement("div", "home");

    const mainText = document.createElement("h1");
    mainText.innerHTML = "Welcome to Sugar Rush Cafe";
    addClasses(mainText, "text-center text-cursive");

    const p = document.createElement("p");
    p.classList.add("text-center");
    p.innerText = "Where sweet people to get sweeter."

    const img = document.createElement("img");
    img.src = HomePageImage;

    home.appendChild(img);
    home.appendChild(mainText);
    home.appendChild(p);
    return home
}