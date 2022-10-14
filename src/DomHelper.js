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

const addClasses = (node, classes) => {
    const classList = classes.split(" ");
    for (let className of classList) {
        node.classList.add(className);
    }
}

export { createElement, createLink, addClasses }