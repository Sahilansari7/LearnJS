
const user = {
    username:"Sahil",
    print: 999,
    welcomeMessage:  function(){
        console.log(`${this.username}, welcome to webiste`); // .this. is used in current contexet one block of scope. to access variable inside the scope
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Zein"
// user.welcomeMessage()


//Arrow Functions
// syntax  () => {}

// const concatenate = (num1,num2) => {
//     return num1 + num2
    
// }
//console.log(concatenate(1,2))

//can also write like this called implicit return

const concatenate = (num1,num2) => num1 + num2 
//or 
//const concatenate = (num1,num2) => (num1 + num2) 
console.log(concatenate(1,2))
