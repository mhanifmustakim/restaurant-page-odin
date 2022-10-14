import { createElement } from "./PageConstructor.js";

const Main = (function () {
    let mainContent;
    const init = () => {
        mainContent = createElement("div", "page-main")

        return mainContent
    }

    return {
        init,
        get node() {
            return mainContent
        }
    }
})()

export default Main