//in singleton or with the helps of constructor

const iphoneUser = new Object();

iphoneUser.id = "123abc"
iphoneUser.name = "Sahil"
iphoneUser.isLoggedIn = false

console.log(Object.keys(iphoneUser)); //access keys
console.log(Object.values(iphoneUser)); //access values
console.log(Object.entries(iphoneUser)); //access entries

// console.log(iphoneUser);


const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname: {
            firstname : "Sahil",
            lastname: "ansari"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2) //way to assign in one line output = { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const obj3={...obj1,...obj2}; //same as up assign one
console.log(obj3);