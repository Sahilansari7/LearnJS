//Basics 01

const name = "Sahil";
let id = 786;

// console.log(`${name}${id}`);
// console.log(name+id);
// console.log(`My name is ${name} and my unique id is ${id} so, you can call
// me ${name}${id}`);



const name2= "I-AM-SAHIL"

// console.log(name2[1]);
// console.log(name2.length);
// console.log(name2.toLowerCase());
// console.log(name2.charAt(5));

// console.log(name2.indexOf("L"));

const name3= name2.substring(5,10);
// console.log(name3);


const abs= "SAHILISBOY"
// console.log(abs.slice(1,4));
// console.log(abs.substring(1,4));

const url = "https://sahil.com/sahil%ansari"
// console.log(url.replace("%","@"));
// console.log(url.includes("sahil"));
// console.log(url.split("sahil"));

// console.log(url);

const numb=100
// console.log(numb.toString().length);
// console.log(typeof(numb));
// console.log(numb.toFixed(10));

const numb2= 123.989898
// console.log(numb2.toPrecision(4));

const  numb3=100000
// console.log(numb3.toLocaleString("en-IN"));



let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

//Basics 02

const unique_id =[1,2,3,4,5]
// console.log(unique_id[0])
// unique_id.push(6,"Sahil")
// console.log( unique_id.pop());
// // unique_id.pop()

unique_id.unshift("SUP?")
unique_id.shift()

// console.log(unique_id);


// const real_names = ["Sahil","Ronaldo","Messi"]
// const nick_names = ["zein","cr7","leo"]

// const unitenames= real_names.push(nick_names);
// const unitenames2 = [...real_names, ...nick_names];
// console.log(real_names);
// console.log(unitenames2);
// console.log(Array.from("Sahil"));

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const spread = another_array.flat(Infinity)
// console.log(spread);

// const mySymbol = Symbol("Sahil is pro") 
// console.log(mySymbol);

const aboutme = {
    name:"sahil",
    age: 21,
    location: "London",
    email: "iamsahilansari7@gmail.com",
    isLoggedIn: false,
    lastlogindays: ["Monday","Saturday"],
    
}

// console.log(aboutme);
// console.log(aboutme.name);
// console.log(aboutme["name"]);

aboutme.location = "UK";
// console.log(aboutme["location"]);
// // Object.freeze(aboutme.location);
// console.log(aboutme["usa"]);

const myobject = new Object();

myobject.id = 1
myobject.name = "Sahil"
myobject.isLoggedIn= false

// console.log(myobject);
// console.log(Object.keys(myobject));
// console.log(Object.values(myobject));
// console.log(Object.entries(myobject));



const regularUser = {

    email: "demo@example.com",
    fullname : {
        firstname : "John",
        lastname : "papa"  
    }


}

// console.log(regularUser.fullname.firstname)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 =  Object.assign( obj1,obj2)
// console.log(obj3);

const obj3= {...obj1, ...obj2}

// console.log(obj3);

// Basics_03

// function myName() {

//     console.log("S");
//     console.log("a");
//     console.log("h");
//     console.log("i");
//     console.log("l");
   
// }
// myName()

function addtwoNumber (num1,num2){
    return num1 + num2
}

// console.log(addtwoNumber(2,2));

function baby(username){

    return `${username} just logged in`

}

// userss= ["sahil" , "zein"]
// console.log(baby(userss));
// console.log(baby());


function calculateCarPrice(...num1){ // ... spread/rest operator will show all in array [ 200, 300, 400 ]
    return num1

}
// console.log(calculateCarPrice(200,300,400))

// const arry = [1,2,3,4,5]
// function pass(get){
//     return get[1]
// }
// console.log(pass(arry));

// const okay = {

//     name: "sahil",
//     class: "bachelor",
//     love: "Basketball",
// }

// function pass(passing){
//     console.log(`My name is ${passing.name} and I completed my ${passing.class} and I love ${passing.love}`);
// }

// pass(okay);

// let a = 300
// let b = 300
// let c = 300

// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a,b,c);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sahil"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    //  console.log(website);


    //  two()

}

// one()

// const userr = {
//     username: "Sahil",
//     print: 999,
//     welcomemessage: function(){
//         console.log(`${this.username}, welcome to webiste`);
//         console.log(this);
//     }
// }

// console.log(userr);
// userr.welcomemessage();


const adding = function letsadd(num1,num2){
    return num1 + num2;

}
// console.log(adding(2,2));

// const adding2 = (num1,num2)=>{
//     return console.log(`The added number of ${num1} and ${num2} is : ${num1+num2}`);
// }
// console.log(adding2(2,2));

const adding3 = (num1,num2)=> "Sa"+'hil'
// console.log(adding3(2,2));

const score = 200


//Controlflow_04

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }


const balance = 101

// if (balance < 50 && balance >40) console.log("Low Balance");
// else if (balance>=100) console.log("High Balance");
// else if (balance>=150) console.log("High Balance wow");
// else if (balance<10) console.log("Greedy Balance");
// else console.log("Buy");

// for (let index = 0; index <10; index++) {
//     console.log(index);
// }

// for (let i = 0; i <= 10 ; i++) {
//     // console.log(`Outer Loop Value: ${i}`);

//     for (let j=0; j < 10 ; j++) {
//         // console.log(`Inner Loop Value: ${j}`);
//         console.log(i + "*" + j + '=' + i*j  );
//     }




// }

// let myArray = ["Flash", "batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//    console.log(element);

// }
// console.log(myArray.length);


// for (let index = 1; index <= 20;  index++) {
//     if (index==5){
//         console.log("5 DETECTED");
//         continue
//     } 
//     console.log  (`Value of i is ${index}`);
// }



// for (let sorry = 1; sorry <= 100; sorry++) {
//     // console.log("I Love you");

//     if (sorry == 10 || sorry ==20) {
//         console.log("SO SO SO MUCH");
//         continue        
//     }
//     console.log(`I love you ${sorry}`);
// }

// let index = 0
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 1
// }

// const arr = [1,2,3,4,5]
// for (const sahil of arr) {
//    console.log(sahil);
    
// }
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);
// for (const [a, b,c] of map) {
//     console.log(a, ':-', b,c);
// }


// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const sah in myObject) {
//     console.log(`${sah} shortcut is for ${myObject[sah]}`);
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     // console.log(item);
// } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach((lll) => {
//     // console.log(lll.languageName);

// })


const mynumi=[1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumi.filter( (num) => {
//     return num > 4
// })

// const newnum = []
// mynumi.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newnums);

// let myHeros = ["Batman", "Perman", "Spiderman"]
// let arr = 0
// console.log(myHeros.length);
// while (arr < myHeros.length ) {
//     console.log(`Value is ${myHeros[arr]}`);
//     arr++
    
// }

// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.filter ( (hi) => {
//     return hi
// })
// console.log(values);

// coding.forEach ( (key) => console.log(key) ) 
// console.log(values);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];


// //   console.log(books);

// // let userBooks = books.filter ( (sah) => sah.genre === 'History' )
// userBooks= books.filter ( (sah) => {
//     return sah.publish>=1995 && sah.genre==="History"

// }
// )



// console.log(userBooks);



const anynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnums = anynumber.map( (num)=> num+10 ) 


const newNums = anynumber
        .map( (num) => num*10)
        // .map((num)=> num + 1)
        .filter ( (num) => num >= 40 )

console.log(newNums);
