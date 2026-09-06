// implementing forEach() 

if(!Array.prototype.myForEach) {
    Array.prototype.myForEach = function(userFn) {
        const originalArr = this // here this will point to the object which is calling this function

        for(let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i)
        }
    }
}

const arr2 = [2,3,5,1,9,8]

arr2.myForEach(function(value, index) {
    console.log(`myForEach value at index ${index} is ${value}`)
})

// map()

const arr3 = [1,2,3,4,5,6,7]
const doubleArr1 = arr3.map((e) => e*2);

console.log(arr3)
console.log(doubleArr1)

// Implementing map()

if(!Array.prototype.myMap) {
    
    Array.prototype.myMap = function(userFn) {
        const result = []
        for(let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i)
            result.push(value)
        }
        return result
    }
}

const result = arr3.myMap(function(value, index) {
    return value * 2;
})
console.log(result)



