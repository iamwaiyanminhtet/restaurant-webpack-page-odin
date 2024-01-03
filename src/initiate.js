let mainDiv = document.querySelector('#content');
function displayChange(div) {
    mainDiv.innerHTML = '';
    mainDiv.append(div);
}

function homeDivAppend (div) {
    mainDiv.append(div);
}

export {displayChange,homeDivAppend}