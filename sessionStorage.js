var like_button = document.getElementById('swipeRight')
like_button.onclick = SaveData;

function SaveData() {
    var matches = [];
    var input = document.getElementById('image');
    matches = JSON.parse(sessionStorage.getItem('image'));
    matches.push(data);
    alert(matches);
    sessionStorage.setItem('image', JSON.stringify(matches));
}

function displayData {
    document.getElementById("matches_list").innerHTML
}