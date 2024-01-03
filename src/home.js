export default function home() {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    div.classList.add('home');
    h1.innerText = "Invisible Restaurant Home";
    p.innerText = "As the name suggest, you will not see a single restaurant with Naked Human Eyes :)";

    div.append(h1,p);
    return div;
}