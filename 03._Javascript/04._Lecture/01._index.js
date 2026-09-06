const arr = [1,2,3]
arr.fill()

const str = "Yashvardhan"
str.length

Object.prototype.chai = function() {
    console.log("Chai")
}
const obj = {
    x : 1
}

// chai() function from parent Object is inherited by child obj
console.log(obj.x)
obj.chai() // chai

// seems like for arr, str, somewhere fill() and length properties are defined as same as x in obj
// Protypes comes into play here

// Polyfill

const arr1 = [1,2,3,4,5]

if(!Array.prototype.fill) {
    // fallback: polyfill
    Array.prototype.fill = function() {
        console.log("fill function implemented here")
    }
} 

// forEach has no return, it takes function as input with value and index in it and the function is called for each value
arr1.forEach(function(value, index) {
    console.log(`index ${index} : value ${value}`)
})

const ret = arr1.forEach(function(value, index) {
    console.log(`index ${index} : value ${value}`)
})

console.log(ret) // undefined bcz forEach doesn't returns anything