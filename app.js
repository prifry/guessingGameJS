let listOfSecretNumber = [];
let maxNum = 10;
let secretNum = createRamdomNumber();
let tries = 1;


//function below is to show the text in the hml tags
function showTextInBrowser(htmlTag, texte) {
  let camp = document.querySelector(htmlTag);
  camp.innerHTML = texte;
  responsiveVoice.speak(texte, 'US English Male', {rate:1.0});
}

//Here we call the text function above and pass the htmlTag and the text parameters to the function.
// We can use this function every time we need to show the main message in the h1 and p tags.
function showStartingMessage(){
    showTextInBrowser("h1", "Secret Number Game");
    showTextInBrowser("p", "Choose a number between 1 and 10");
}

//call function Show starting message h1 and p tags
showStartingMessage();

// function to check user guess
function verifyGuess() {

  let userGuess = document.querySelector("input").value;

  if (userGuess == secretNum) {
    showTextInBrowser("h1", "You got it right!");

    let wordTry = tries > 1 ? "tries" : "try";
    let messageTry = `You guessed the secret  number! The Secret number was ${secretNum} and you found it With ${tries} ${wordTry}.`;

    showTextInBrowser("p", messageTry);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (userGuess < secretNum) {
      showTextInBrowser("p", "The secret number is higher.");
    } else {
      showTextInBrowser("p", "The secret number is lower.");
    }
  }

  tries++;
  cleanBox();
}


//create random number
function createRamdomNumber() {
  let quantityOfListElement = listOfSecretNumber.length;
  let chosenNumber =  parseInt(Math.random() * maxNum + 1);

if(quantityOfListElement == maxNum){
  listOfSecretNumber =[];
}

  if(listOfSecretNumber.includes(chosenNumber)){
    return createRamdomNumber();
  }else{
    listOfSecretNumber.push(chosenNumber)
    return chosenNumber;
  }
}


function cleanBox(){
    userGuess = document.querySelector('input');
    userGuess.value = '';
}

//To reestart the game we call all the functions of the game to the restartGame  function.
function restartGame(){
    secretNum = createRamdomNumber();
    cleanBox();
    tries = 1;
    showStartingMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true); //this is the button  id to restart the game. Keep it true for disable in the begning of the game
}
