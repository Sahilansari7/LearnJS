# Projects related to DOM

## Project Link
[Click Here ](https://stackblitz.com/edit/stackblitz-starters-ngbabr?description=HTML/CSS/JS%20Starter&file=01_TapColourChanger%2Fscript.js,01_TapColourChanger%2Findex.html,01_TapColourChanger%2Fstyles.css&terminalHeight=10&title=Static%20Starter)

# Solution Code
## Project 1
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