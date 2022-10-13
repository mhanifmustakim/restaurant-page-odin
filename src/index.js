import PageConstructor from './PageConstructor.js'
import './style.css'

const content = document.querySelector("#content");
content.appendChild(PageConstructor.header);
content.appendChild(PageConstructor.navbar);
PageConstructor.setActiveNav("Home")
PageConstructor.initMain();
content.appendChild(PageConstructor.main);
content.appendChild(PageConstructor.footer);