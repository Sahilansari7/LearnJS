const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "BAtman"];

// marvel_heros.push(dc_heros); //push lmade total of three arrays "array bhitra array"
// console.log(marvel_heros);

const allheros = [...marvel_heros, ...dc_heros]; // ... this method is pread method where all arrays get merge in one
console.log(allheros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity) // spread out all in one
console.log(real_another_array);


console.log(Array.isArray("Sahil")); //asking for array so its false here
console.log(Array.from("Sahil")); // returns [ 'S', 'a', 'h', 'i', 'l' ]

let marksofscience=99
let marksofcomputer=97
let marksofmath=98
 
console.log(Array.of(marksofscience,marksofcomputer, marksofmath)) //converted to array like this : [ 99, 97, 98 ]