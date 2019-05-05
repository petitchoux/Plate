function getSavedImages() {
    var prevState = localStorage.getItem('imgUrls');
    var matches = (prevState == null || prevState == "") ? [] : prevState.split(",");
    return matches
}

function SaveData() {
    let matches = getSavedImages();
    var activeImgSrc = getActiveImageUrl();
    matches.push(activeImgSrc);
    localStorage.setItem('imgUrls', matches);
}

function addImageToDocumentMatch(imgUrl) {
    var node = document.createElement("LI");
    var newImage = document.createElement("IMG");
    newImage.setAttribute("src", imgUrl);
    node.appendChild(newImage);
    document.getElementById("matches").appendChild(node);
}

function displayData() {
    var prevState = localStorage.getItem('imgUrls');
    var matches = (prevState == null || prevState == "") ? [] : prevState.split(",");
    for (let match of matches) {
        addImageToDocumentMatch(match);
    }
}

function getActiveImageUrl() {
    let activeDiv = document.getElementsByClassName("fotorama__stage__frame fotorama__loaded fotorama__loaded--img fotorama__active")[0];
    let imgSrc = activeDiv.getElementsByTagName("img")[0].src;
    return imgSrc
}