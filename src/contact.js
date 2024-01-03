export default function contact() {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    div.classList.add('contact');
    h1.innerText = "Invisible Restaurant Contact";
    p.innerText = "close your eyes to connect with us in your imagination";

    div.append(h1,p);
    return div;
}