var like_button = document.getElementById('swipeRight')
like_button.onclick = SaveData;

function SaveData() {
    var matches = [];
    var input = document.getElementById('image').src;
    matches = JSON.parse(sessionStorage.getItem('image'));
    matches.push(data);
    alert(matches);
    sessionStorage.setItem('image', JSON.stringify(matches));
}

function displayData() {
    var retrievedData = localStorage.getItem("image");
    var list2 = JSON.parse(retrievedData);
    alert(list2.length);
    for (i = 0; i < matches.length; i++) {
        document.write("<li><img src='" + matches[i] + "/></li>");
    }
}