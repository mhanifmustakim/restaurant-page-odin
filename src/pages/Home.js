import HomePageImage from "/src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg";

export default function () {
    const home = document.createElement("div");
    home.id = "home";

    const mainText = document.createElement("h1");
    mainText.innerHTML = "Welcome to Sugar Rush Cafe";
    mainText.classList.add("text-cursive");
    mainText.classList.add("text-center");

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