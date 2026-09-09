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


// implementing filter()
// Signature: Returns new array | input : userFn
// if userFn returns true then it pushes the current array value into the new array



const evenArr3 = arr3.filter((e) => e %2 == 0)

console.log(evenArr3)

if(!Array.prototype.myFilter) {

    Array.prototype.myFilter = function(userFn) {
        const result = []
        for(let i = 0; i < this.length; i++) {
            if(userFn(this[i], i)) {
                result.push(this[i])
            }
        }
        return result
    }
}

const evenArr = arr3.myFilter(function(value, index) {
    return (value % 2 == 0)
})

console.log(evenArr)
