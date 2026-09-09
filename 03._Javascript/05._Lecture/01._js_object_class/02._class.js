class Person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

class Man extends Person {
    constructor(fname, lname) {
        super(fname, lname);
        console.log("inside class Man")
    }
    
}

const p1 = new Person("Yash", "Vardhan")
const p2 = new Person("Harsh", "Vardhan")

const p3 = new Man("Harsh", "Vardhan");
console.log(p3.getFullName())

//console.log(p1.getFullName())