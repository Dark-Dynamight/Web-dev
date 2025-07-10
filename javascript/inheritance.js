//inheritance
//parent
class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }
}

// child
class Student extends Person {
    constructor(name, mobile, course, marks) {
        super(name, mobile)
        this.course = course;
        this.marks = marks;
    }
}

let std = new Student('surya', 999, 'btech', 100)
console.log(std)

//old syntax
function Person1(name, mobile) {
    this.name = name;
    this.mobile = mobile;
}
function Student1(name, mobile, course, marks) {
    Person1.call(this, name, mobile)
    this.course = course
    this.marks = marks
}

Student1.prototype = Object.create(Person1.prototype)
let std1 = new Student1('surya', 999, 'btech', 100)
console.log(std1)