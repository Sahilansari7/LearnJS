const name = "sahil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sahil-hc-com')

console.log(gameName[0]);  //print s as at index 0 lies as s
 console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //helps to pull letters from 0 1 2 3 only 
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sahil    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes spaces

const url = "https://sahil.com/sahil%20choudhary"

console.log(url.replace('%20', '-')) //replace %20 with -

console.log(url.includes('sundar'))

console.log(gameName.split('-'));