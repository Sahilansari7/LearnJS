//For Loop

// syntax 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }


//loop in loop

for (let i = 0; i <= 10 ; i++) {
    // console.log(`Outer Loop Value: ${i}`);
    for (let j = 0; j <= 10 ; j++) {
        //console.log(`Inner Loop Value: ${j} Outer Loop Value: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
    
}


// let myArray = ["Flash", "batman","superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//  //   console.log(element);

// }

//console.log(myArray.length);

//Keywords
//break and continue

// for (let index = 1; index <= 20;  index++) {
//     if (index == 5) {
//         console.log(`detected 5 bro`);
//         break
//     }
//     console.log  (`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 20;  index++) {
    if (index == 5) {
        console.log(`detected 5 bro`);
        continue
    }
    console.log  (`Value of i is ${index}`);
    
}


//continue skip one value and break stop the code