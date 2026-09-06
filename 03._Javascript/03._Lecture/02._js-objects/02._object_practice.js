// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const teas = {
    name : "lemon tea",
    "tea type" : "green",
    caffeine : "low",
}

// Problem: Access and print the name and type properties of the tea object.

console.log(teas.name)
console.log(teas["tea type"]) // to access "tea type" inside quote

//Problem: Add a new property origin to the tea object.

teas.origin = "Assam"
console.log(teas.origin)

//Problem: Change the caffeine level of the tea object to "Medium".

teas.caffeine = "Medium"
console.log(teas.caffeine)

//Problem: Remove the type property from the tea object.

delete teas["tea type"]
console.log(teas) //{ name: 'lemon tea', caffeine: 'Medium', origin: 'Assam' }

//Problem: Check if the tea object has a property origin.
console.log("origin" in teas) // true

//Problem: Use a for...in loop to print all properties of the tea object.
for(let i in teas) {
    console.log(`${i} : ${teas[i]}`)
}

//Problem: Create a nested object representing different types of teas and their properties.
const teas1 = {
    abra : {
        type: "herbal",
        caffeine: "low"
    },
    dabra : {
        type: "green",
        caffeine: "low"
    }
}
console.log(teas1)

//Problem: Create a copy of the tea object.

const copyTeas1 = JSON.stringify(teas1)
const teas2 = JSON.parse(copyTeas1)

console.log(teas2)

//Problem: Add a custom method describe to the tea object that returns a description string.

teas1.describe = function() {
    return `This is ${teas1.abra.type}`
}
console.log(teas1.describe()) // 'This is herbal'

//Problem: Merge two objects representing different teas into one.

const tea1 = { name: "Green Tea", price: 100 };
const tea2 = { name: "Black Tea", origin: "India" };

const mergedTea = { ...tea1, ...tea2 };

console.log(mergedTea);
// { name: "Black Tea", price: 100, origin: "India" }


