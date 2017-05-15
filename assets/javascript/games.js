

    var doubleWord = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    // WORD BANK

    var words = [

      "fantastic",

      "spacious",

      "muscle",

      "festival",

      "playlist",

      "keyboard"

    ];

    var randomWord = "";
    var lettersInWord = [];
    var numblanks = 0;
    var blankAndSuccesses = [];
    var wrongLetter = [];

    var winCount = 0;
    var loseCount = 0;
    var guessesLeft = 7;
    var rightGuessCounter = 0;

   function reset() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = randomWord.split('');
    numblanks = lettersInWord.length;

    letterGuessed = 0;
    rightGuessCounter = 0
    guessesLeft = 7;
    wrongLetters = [];
    blankAndSuccesses = [];
    doubleWord = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    test=false;
    startGame();
   }

function startGame(){

 // debugger;

    for (var i = 0; i < numblanks; i++) {
      blankAndSuccesses.push('_');
    }



    document.getElementById('wordToGuess').innerHTML = blankAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    document.getElementById("numblanks").innerHTML = numblanks;

    

};

function winLose() {
if(rightGuessCounter === numblanks) {
  winCount++;
  document.getElementById('winCounter').innerHTML = winCount;
  alert('You Win');
  reset();
}
else if (guessesLeft === 0) {
  loseCount++;
  document.getElementById('lossCounter').innerHTML = loseCount;
  alert("You Lose");
  reset();
}
};



function compareLetters(userKeyGuess) {
  var index = randomWord.indexOf(userKeyGuess);
  if (index > -1) {
    blankAndSuccesses[index] = userKeyGuess;
    document.getElementById('wordToGuess').innerHTML = blankAndSuccesses.join(' ');
  } else {
    wrongLetters.push(userKeyGuess);
    guessesLeft--;
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
  }
};

document.getElementById("startButton").onclick = function(){
  document.getElementById("main").className = "";
  reset();
  document.getElementById("startButton").innerHTML = "Reset";
}

document.onkeyup = function(event) {

  test = true;

  var letterGuessed = event.key;
  var index = doubleWord.indexOf(letterGuessed);
  if (index > -1){
      doubleWord.splice(index,1); 
      compareLetters(letterGuessed);
      winLose();
  }
 
}

