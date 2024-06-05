
// If statement


//syntax
// if (condition) {

// }   if condition is true then it will execute otherwise it wont

// const isUserLoggedIn = true

// const temperature = 30
// if (temperature > 30){
//     console.log(" Less Temperature");
// }
// else{
//     console.log(" Higher Temperature");
// }


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }


//const balance = 1000

// if (balance > 100) console.log("test"),
// console.log("test 2");  //can be written like this as well.. for more logs add comma and end with semicolon



//else if

// const mob_balance = 1000
// if (mob_balance < 500) {
//     console.log("less than 500");
// } else if (mob_balance < 750) {
//     console.log("less than 750");
    
// } else if (mob_balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }    // output: less than 1200



// In real world

const UserLoggedIn = true
const debitcard = true
const loggedinfromGMAIL = false
const loggedinfromEmail = true

if (UserLoggedIn && debitcard) {  //AND opperator
    console.log("User allow to shopping");
}
if (loggedinfromGMAIL || loggedinfromEmail) {  //  this is an OR opperator
    console.log( "Thankyou for Login");
    
}