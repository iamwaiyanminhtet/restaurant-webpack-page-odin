import {displayChange,homeDivAppend} from "./initiate.js";
import home from "./home.js";
import contact from "./contact.js";
import about from "./about.js";

const tabs = document.querySelector('#tabs');
let homeDiv = home();
let contactDiv = contact();
let aboutDiv = about();

homeDivAppend(homeDiv);
tabs.addEventListener('click',(e) => {
    let cur = e.target;

    if(cur.matches('button') && cur.textContent === "Home") {
        displayChange(homeDiv)
    }
    if(cur.matches('button') && cur.textContent === "About") {
        displayChange(aboutDiv)
    }
    if(cur.matches('button') && cur.textContent === "Contact") {
        displayChange(contactDiv)
    }
    
});