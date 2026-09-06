//create an array containing different types of teas
const teas = ["green tea", "black tea", "oolong tea", "white tea", "herbal tea"]

// add chaomile tea to the existing list
teas.push("chaomile tea");

// remove oolong tea from the list of tea
const index = teas.indexOf("oolong tea");
if(index > -1) {
    teas.splice(index, 1);   
}

/* ------------ splice concept ----------------

array.splice(start, deleteCount)
splice(start, deleteCount, itemToAdd)

let fruits = ["apple", "banana", "mango", "orange"];

fruits.splice(1, 1); 
// removes 1 item from index 1
// ["apple", "mango", "orange"]

fruits.splice(1, 0, "banana");
// adds "banana" at index 1
// ["apple", "banana", "mango", "orange"]

fruits.splice(2, 1, "grapes");
// removes "mango" and adds "grapes"
// ["apple", "banana", "grapes", "orange"]

*/

// filter the list to only include the teas that are caffeinated

const caeffinated = []
let len = teas.length
for(let i = 0; i < len; i++) {
    if(teas[i] !== "herbal tea") {
        caeffinated.push(teas[i])
    }
}

console.log(caeffinated)

// better way

const caeffintedTeas = teas.filter((tea) => tea !== "herbal tea")

/*
  filter() Notes

  filter() creates a NEW array containing only items
  that match a condition.

  Syntax:
  const newArray = oldArray.filter((item) => condition);

  Example:
  const teas = ["Green Tea", "Herbal Tea", "Black Tea"];
  const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

  How it works:
  - `true` → item is kept
  - `false` → item is skipped
  - The original array is NOT changed
*/



// sort the list of teas in alphabetical order

teas.sort()
console.log(teas)

// Use a for loop to create a new array with all tea names in upper case
const upCaseTea = []
for(let i = 0; i < teas.length; i++) {
    upCaseTea.push(teas[i].toUpperCase())
}
console.log(upCaseTea)

// Problem: Use a for loop to find the tea name with the most character
let maxLengthTea = ""
for(let i = 0; i < teas.length; i++) {
    if(maxLengthTea.length < teas[i].length) {
        maxLengthTea = teas[i]
    }
}
console.log(maxLengthTea);

// Problem: Use a for loop to reverse the order of teas in the array
const reversedTeas = []
for(let i = teas.length-1; i >= 0; i--) {
    reversedTeas.push(teas[i]);
}
console.log(reversedTeas)

