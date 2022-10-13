const PageConstructor = (function () {
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
        const el = createElement("div", "page-navbar");
        const navLinks = createElement("ul", "nav-links");
        ["Home", "Cakes", "Sweets", "Chocolates"].forEach((nav) => {
            const li = document.createElement("li");
            li.setAttribute("data-nav", nav);
            li.textContent = nav;
            li.addEventListener("click", navigate);
            navLinks.appendChild(li);
        })

        el.appendChild(navLinks);
        return el
    }

    const navigate = (event) => {
        console.log(event.target.getAttribute("data-nav"));
    }

    const setActiveNav = (nav) => {
        const activeNav = document.querySelector(`[data-nav="${nav}"]`);
        activeNav.classList.add("active");
    }

    const initMain = () => {
        mainContent = createElement("div", "page-main")
        return mainContent
    }

    return {
        initMain,
        setActiveNav,
        get header() {
            return createHeader()
        },
        get navbar() {
            return createNavbar()
        },
        get footer() {
            return createFooter()
        },
        get main() {
            return mainContent
        }
    }
})()

export default PageConstructor