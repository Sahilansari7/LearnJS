
//  console.log("S");
//  console.log("a");
//  console.log("h");
//  console.log("i");
//  console.log("l");

 //instead of doing this we can call a function and do it like:

function myName() {

    console.log("S");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
   
}

//myName()

//Add two number with function simply

function addtwoNumber(number1, number2) { //number1, number2 are PARAMETERS
//     console.log(number1 + number2);
}
 
//addtwoNumber(3,2) //5  3,2 are ARGUMENTS
// addtwoNumber(3,"2") //32
// addtwoNumber(3,null) //3

//Add two number with function with return

function addtwoNumber(number1, number2) { //number1, number2 are PARAMETERS
    return number1+number2;
}
 const result = addtwoNumber(3,5)
// console.log("Result :",result);


function loginUserMessage(username){
    return `${username} just logged in`
}

//console.log( loginUserMessage("Sahil")); //Sahil just logged in
//console.log( loginUserMessage()) //undefined just logged in


function calculateCarPrice(...num1){ // ... spread/rest operator will show all in array [ 200, 300, 400 ]
    return num1

}
//console.log(calculateCarPrice(200,300,400))



//passing array to function
const myArray = [1,2,3,4,5]
function returnSecondvalue(getsecondvalue){
    return getsecondvalue[1]
}
console.log(returnSecondvalue(myArray));  //2



//passing object to function method
const myObject = {
    name:"Sahil",
    Hobby:"Basketball",
    Address:"London",
}

function myfunction(demo){
    console.log(`My name is ${demo.name}. My hobby is to play ${demo.Hobby} and i live in ${demo.Address}.`);
}

myfunction(myObject)