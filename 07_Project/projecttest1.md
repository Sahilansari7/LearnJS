# Projects related to DOM

## Project Link
[Click Here ](https://stackblitz.com/edit/stackblitz-starters-ngbabr?description=HTML/CSS/JS%20Starter&file=01_TapColourChanger%2Fscript.js,01_TapColourChanger%2Findex.html,01_TapColourChanger%2Fstyles.css&terminalHeight=10&title=Static%20Starter)

# Solution Code
## Project 1 - Tap Colour Changer
``` javasacript
console.log("Sahil")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.targer)
    if (e.target.id==="grey"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id==="white"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id==="blue"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id==="yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
});

```


## project 2  BMI Generator
``` javascript
const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')

  if(height=== " " || height < 0 || isNaN(height)){
    results.innerHTML = `Please Give a valid height ${height}`;
  }else if(weight=== " " || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Give a valid height ${weight}`;
  } else{
    const bmi= (weight / ((height*height)/10000)).toFixed(2)
//showing the results
    results.innerHTML = `<span>${bmi}</span>`
  }

})

```

## Project 3  Digital Clock
```
javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 Guess the correct number

```
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML= `<h2 id="newGame">Start new Game</h2>`;
startOver.appendChild(p)
playGame=false
newgame()
}


function newgame(){
const Newgamebutton=document.querySelector('#newGame')
Newgamebutton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess=[]
  numGuess=1
  guessSlot.innerHTML=''
  remaining.innerHTML = `${11 - numGuess} `;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true

})
}
```