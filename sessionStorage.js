var like_button = document.getElementById('swipeRight')
like_button.onclick = SaveDataToStorage;

function SaveDataToStorage() {
    var matches = [];
    var input = document.getElementById('match');
    matches = JSON.parse(sessionStorage.getItem('match'));
    matches.push(data);
    alert(matches);
    sessionStorage.setItem('match', JSON.stringify(matches));
}