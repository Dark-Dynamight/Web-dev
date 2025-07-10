// object copying
let student = {
    name: 'surya',
    rollno: 495
}

let studentCopy = Object.assign({}, student)
// let studentCopy = { ... student }

console.log(student)
console.log(studentCopy)

student.name = 'karthik'
student.calss = 'ECE'
console.log(student)
console.log(studentCopy)