//object =key and avalue


const mySymbol = Symbol("Sahil is pro") //to refer symbol it must be in square bracket


const myself={
    name: "Sahil",
    age:  "22",
    loctaion: "London",
    email: "iamsahilansari7@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"],
    [mySymbol]:"mysahil"
}

// console.log(myself.name) //to access
// console.log(myself["name"]) //to access use this
// console.log(myself[mySymbol])
// console.log(mySymbol);

myself.loctaion="Australia" //to change
//Object.freeze(myself) //to fress ,cannot change the value
myself.loctaion="Dubai" 
// console.log(myself)

//console.log(myself.loctaion) 

myself.greeting = function(){
    console.log("Hello JS user");
}
myself.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log
myself.greeting();
console.log
myself.greetingTwo();