import { createElement } from './DomHelper.js';
import HomePage from "./pages/Home.js";
import Menu from "./pages/Menu.js";

const Main = (function () {
    let mainContent;
    const pages = {
        Home: HomePage(),
        Menu: Menu()
    }

    const init = () => {
        mainContent = createElement("div", "page-main")
        mainContent.appendChild(pages["Home"])

        return mainContent
    }

    const setContent = (page) => {
        clearMain();
        mainContent.appendChild(pages[page]);
    }

    const clearMain = () => {
        mainContent.innerHTML = "";
    }

    return {
        init,
        setContent,
        get node() {
            return mainContent
        }
    }
})()

export default Main