var strikeCounter = 0;
var imageUrls = [
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-1.PNG?v=1599594118529",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-2.PNG?v=1599594127611",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-3.PNG?v=1599594130119",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-4.PNG?v=1599594137986",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-5.png?v=1599594142380"
];
function strike() {
  var imageUrl = imageUrls[strikeCounter];
  if (strikeCounter > 4) {
    alert("game over :( try to revive the one you killed");
    reset();
    return;
  }
  document.getElementById("hangedMan").innerHTML =
    "<img src = " + imageUrl + ' height = "500px">';
  strikeCounter++;
}

function reset() {
  strikeCounter = 0;
  document.getElementById("hangedMan").innerHTML =
    '<img src = "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-0.PNG?v=1599594116026" height = "500px">';
}
