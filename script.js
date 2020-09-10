//still problematic
var strikeCounter = 0;
var mistakes = 0;
var wordArray = ["azure", "turquoise", "crimson", "teal", "fuchsia", "aquamarine", "beige", "lilac", "maroon", "burgundy", "coral", "ebony"];
var letterArray = [];
var keyboardHTML = `
                  <table>
                          <tr>
                            <td id = "letterA" onclick = "makeGuess('a')">A</td>
                            <td id = "letterB" onclick = "makeGuess('b')">B</td>
                            <td id = "letterC" onclick = "makeGuess('c')">C</td>
                            <td id = "letterD" onclick = "makeGuess('d')">D</td>
                            <td id = "letterE" onclick = "makeGuess('e')">E</td>
                            <td id = "letterF" onclick = "makeGuess('f')">F</td>
                            <td id = "letterG" onclick = "makeGuess('g')">G</td>
                            <td id = "letterH" onclick = "makeGuess('h')">H</td>
                            <td id = "letterI" onclick = "makeGuess('i')">I</td>
                            <td id = "letterJ" onclick = "makeGuess('j')">J</td>
                            <td id = "letterK" onclick = "makeGuess('k')">K</td>
                            <td id = "letterL" onclick = "makeGuess('l')">L</td>
                            <td id = "letterM" onclick = "makeGuess('m')">M</td>
                          </tr>
                          <tr>
                            <td id = "letterN" onclick = "makeGuess('n')">N</td>
                            <td id = "letterO" onclick = "makeGuess('o')">O</td>
                            <td id = "letterP" onclick = "makeGuess('p')">P</td>
                            <td id = "letterQ" onclick = "makeGuess('q')">Q</td>
                            <td id = "letterR" onclick = "makeGuess('r')">R</td>
                            <td id = "letterS" onclick = "makeGuess('s')">S</td>
                            <td id = "letterT" onclick = "makeGuess('t')">T</td>
                            <td id = "letterU" onclick = "makeGuess('u')">U</td>
                            <td id = "letterV" onclick = "makeGuess('v')">V</td>
                            <td id = "letterW" onclick = "makeGuess('w')">W</td>
                            <td id = "letterX" onclick = "makeGuess('x')">X</td>
                            <td id = "letterY" onclick = "makeGuess('y')">Y</td>
                            <td id = "letterZ" onclick = "makeGuess('z')">Z</td>
                          </tr>
                        </table>` 



var imageUrls = [
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-1.PNG?v=1599594118529",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-2.PNG?v=1599594127611",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-3.PNG?v=1599594130119",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-4.PNG?v=1599594137986",
  "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-5.png?v=1599594142380"
];



function strike() {
  
  mistakes++
  alert(mistakes)
  
  var imageUrl = imageUrls[strikeCounter];
  document.getElementById("hangedMan").innerHTML =
    "<img src = " + imageUrl + ' height = "500px">';
  strikeCounter++;
  
}
function isGameOver(){
  if (mistakes == 5) {
    return true;
  }
  return false;
}

function reset() {
  strikeCounter = 0;
  document.getElementById("hangedMan").innerHTML =
    '<img src = "https://cdn.glitch.com/ac52baf3-5012-46b4-bee1-c81c89a3bfe0%2Fhangman-0.PNG?v=1599594116026" height = "500px">';
  dashMaker();
  createKeyboard();
  
}

function chooseWord(){
  var randNum = Math.floor(Math.random()*wordArray.length) 
  var word = wordArray[randNum];
  document.getElementById("debug").innerHTML = word;
  return word;
}
function dashMaker(){
  letterArray = chooseWord().split("");
  var dashString = "";
  for (var i = 0; i<letterArray.length; i++){
    dashString = dashString + '<span class = "'+letterArray[i]+'">_</span>';
  }
  document.getElementById("dashes").innerHTML = dashString  
}
function disableLetter(alphabet){
  var currentDoc = document.getElementById("letter"+alphabet.toUpperCase());
  currentDoc.classList.add("out");
}
function makeGuess(alphabet){
  var alphaIndices= multiIndexOf(alphabet)
  disableLetter(alphabet);
  if (alphaIndices.length == 0){
    strike()
    if (isGameOver()){
      alert("Game Over");
      reset();
      return;
    }
  }
  else{
    populateDashes(alphaIndices)
    wordComplete()
  }
}

function multiIndexOf(alphabet){
  var indices = [];
  for (var i = 0; i<letterArray.length; i++){
    if (alphabet == letterArray[i]){
      indices.push(i);
    }
  }
  return indices;
}
function createKeyboard(){
  document.getElementById("keyboard").innerHTML = keyboardHTML;
}

function populateDashes(alphaIndices){
  var elements = document.getElementById("dashes").childNodes;
  for (var i = 0; i<alphaIndices.length; i++){
    elements[alphaIndices[i]].innerHTML = elements[alphaIndices[i]].className;
  }
}

function wordComplete(){
  var dashesValue = document.getElementById("dashes").innerText;
  var fullWord = letterArray.join('')
  if (dashesValue == fullWord){
      alert("You win, the word is "+fullWord)
      reset();
  }
}


dashMaker()
createKeyboard();

