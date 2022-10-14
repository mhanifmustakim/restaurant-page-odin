import { createElement } from "./DomHelper";
import Main from "./Main.js";

const Nav = (function () {
    const navs = ["Home", "Menu"];
    let navNode, currentActive;

    const init = () => {
        const el = createElement("div", "page-navbar");
        const navLinks = createElement("ul", "nav-links");
        navs.forEach((nav) => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            li.setAttribute("data-nav", nav);
            p.textContent = nav;
            li.appendChild(p);
            li.addEventListener("click", navigate);
            navLinks.appendChild(li);
        })

        el.appendChild(navLinks);
        navNode = el;
        setActiveNav(navs[0]);
    }

    const navigate = (event) => {
        const target = event.target.getAttribute("data-nav") || event.target.parentElement.getAttribute("data-nav");
        setActiveNav(target);
        Main.setContent(target);
    }

    const setActiveNav = (nav) => {
        if (currentActive) clearActive();

        const activeNav = navNode.querySelector(`[data-nav="${nav}"]`);
        activeNav.classList.add("active");
        activeNav.removeEventListener("click", navigate);
        currentActive = activeNav;
    }

    const clearActive = () => {
        currentActive.classList.remove("active");
        currentActive.addEventListener("click", navigate);
    }

    return {
        init,
        get node() {
            return navNode
        }
    }
})()

export default Nav