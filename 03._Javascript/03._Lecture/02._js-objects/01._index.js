// creating an object
const person = {
    x : 10,
    firstName : "Yashvardhan",
    lastName : "Singh",
    hobbies : ["Coding", "Playing"],  // array inside an object
    isMaried : false, 
    hasGF : false,
    getFullName : function() { // function inside an object
        return 'Yashvardhan Singh'
    },
    address : { // object inside an object
        hno: 1,
        streetno: 1,
        countryCode: 'IN',
        state: 'Uttrakhand',
    }

}

console.log(person.address.state)
// we can have any datatype inside an object



// How objects are stored in the memory

let p1 = {
    fname : "Yashvardhan",
    address : {
        hno: 1,
        state: "Uk"
    }
}

// here pass by reference happens
let p2 = p1  
console.log(p1.fname) //Yashvardhan
console.log(p2.fname) // Yashvardhan

p2.fname = "Harshvardhan" 
console.log(p1.fname) // Harshvardhan
console.log(p2.fname) // Harshvardhan

// Here, pass by value happens

p3 = {
    fname : p1.fname
}
console.log(p3.fname) // Harshvardhan
p3.fname = "Rajvardhan"

console.log(p1.fname) //'Harshvardhan'
console.log(p3.fname) //'Rajvardhan'

// what if you had millions of members inside p1 object? 
// You would have to write that many times inside p3

// Solution: use ... operator called Spread Operator

p4 = {
    ...p1 // spread operator copies all members of object p1 into object p4
}
console.log(p4.fname)

// There is a problem with spread operator
// It does shallow copy, so it can't take inner objects (object inside object) by value, it takes them by reference.
// Here, in p1, address is inner object

// pass by reference happens here for inner object
console.log(p4.address) 
p4.address.state = "Bihar"
console.log(p4.address.state) // changing here also changes in p1
console.log(p1.address.state)

// if there was an array in p1, that also would have been passed by reference

// so what we do?
p5 = {
    ...p1,
    address : {
        ...p1.address
    }
}
p5.address.state = "HSR"
console.log(p5.address.state)
console.log(p1.address.state)
// p1 innner object elements doesn't changes when p5 inner object element changes
// so pass by value done here
// But what if there is another inner object inside the object "address" and so on
// then it will become very hectic to use spread operator for all of them

// Solution
// convert the object to string format so that it becomes primitive datatype and can be copied instead of referenced

// we got new address now (serialization)
const p1ToString = JSON.stringify(p1)
console.log(p1ToString)

// converting back to object (deserialization)
let p6 = JSON.parse(p1ToString)
p6.fname = "Abhinaw"
console.log(p6.fname) // 'Abhinaw'
console.log(p1.fname) // 'Harshvardhan'


