
// Immediately Invoked Function Expressions (IIFE)


// function Zein(){
//     console.log("DB Connection");
// }
// Zein()

// this can be written like this in iife method


    (function Zein(){
        console.log("DB Connection");
    }
)();

// first () function defination . second () for execution. ; to end code


// () ()

( (name) => {
    console.log(` Hi Sahil ${name}` );
} ) ("ansari")