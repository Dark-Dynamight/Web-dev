//object literal
let student = {
    name: 'surya',
    id: 495
}

console.log(student.name)
console.log(student['name'])

for (let key in student) {
    console.log(key, ":", student[key])
}

//complex object
let empl = {
    empid: 495,
    name: 'surya',
    base: 500000,
    getSalary: function () {
        let hra = 0.15 * this.base
        let da = 0.10 * this.base
        let salary = this.base + hra + da
        return salary
    }
}

console.log(empl.getSalary())