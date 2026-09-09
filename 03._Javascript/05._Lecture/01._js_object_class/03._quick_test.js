Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`)
}

function masalaChai() {}
function gingerChai() {}

function greet(name) {
    return `Hello ${name}`
}

greet()

greet.describe("Yash") // Function name is greet

masalaChai.describe() // Function name is masalaChai

// Different ways of writing functions

// function declaration

function add(a, b) {
    return a + b
}

// function expression

const subtraction = function() {
    return a-b
}

// Arrow function

const multiply = (a, b) => a*b


// first class function

function applyOPeration(a, b, operation) {
    return operation(a,b)
}

const result = applyOPeration(a,b, (a,b) => a/b)

// tiffin function

function createCounter() {

    let count = 0
    return function() {
        count++
        return count
    }
}

const counter = createCounter()
console.log(counter())

// iffi function
(function() {
    console.log("yash")
})()

()()


