// function to sum elemenyts in the array

let array = [1,2,5,3,8,6,9]

//sum function
function arrSum(array) {
    let sum = 0
    for(let i = 0; i < array.length; i++) {
        sum += array[i]
    }

    return sum
}

let ans = arrSum(array)
console.log(ans)

ans = arrSum([1,2,3,4])
console.log(ans)
