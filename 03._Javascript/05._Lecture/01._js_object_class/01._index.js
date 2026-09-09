const obj1 = {
    fname : "Yash",
    lname : "Vardhan",
    getFullName : function() {
        if(this.lname !== undefined) {
        return `${this.fname} ${this.lname}`
        }
        return `${this.fname}`
    }
}
const obj2 = {
    fname : "Harsh ",
    lname : "Vardhan",
    getFullName : function() {
        return `${this.fname} ${this.lname}`
    }
}

console.log(obj1)
console.log(obj1.getFullName())

// suppose now you need to do some changes in the getFullNmae() function so that it can handle people with no last name

// okay, changes done to obj1 but what if there are millions of such objects, will you change this function in those millions of objects. NO : we always follow DRY (do not repeat yourself)

// So we use class as a template
// to be continued in next chapter......


