// implementing filter()
// Signature: Returns new array | input : userFn
// if userFn returns true then it pushes the current array value into the new array


const arr3 = [1,2,3,4,5,6,7]
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