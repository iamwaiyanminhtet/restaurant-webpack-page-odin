export default function about() {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    div.classList.add('about');
    h1.innerText = "Invisible Restaurant About";
    p.innerText = "We are powered by the VOID";

    div.append(h1,p);
    return div;
}