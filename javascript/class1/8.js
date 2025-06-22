let arr1 = [10, 20, 30, 40, 50]

//reduce
//sum of array
let sum = arr1.reduce((acc, elem) => acc + elem)
console.log('sum is', sum)
//smallest
let small = arr1.reduce((acc, elem) => acc < elem ? acc : elem)
console.log('smallest is', small)
//largest
let large = arr1.reduce((acc, elem) => acc > elem ? acc : elem)
console.log('Largest is', large)


let emp = [
    {
        empid: '495',
        name: 'surya',
        age:21,
        base: 500000,
        location:'Hyderabad',
        getSalary: function () {
            let hra = 0.15 * this.base
            let da = 0.10 * this.base
            let salary = this.base + hra + da
            return salary
        }
    },
    {
        empid: '4B6',
        name: 'Karthik',
        age:21,
        base: 500000,
        location:'chennai',
        getSalary: function () {
            let hra = 0.15 * this.base
            let da = 0.10 * this.base
            let salary = this.base + hra + da
            return salary
        }
    },
    {
        empid: '4B3',
        name: 'Vishal',
        age:20,
        location:'Hyderabad',
        base: 500000,
        getSalary: function () {
            let hra = 0.15 * this.base
            let da = 0.10 * this.base
            let salary = this.base + hra + da
            return salary
        }
    }
]

//get emps whos age is grater than 20
let empAgeGreater20= emp.filter((empobj)=>empobj.age>20)
console.log(empAgeGreater20)
//add 2000 hike to the hyderabad employes
let hike2HydEmp=emp.map((empobj)=>{if(empobj.location=='Hyderabad'){
    return empobj.base+2000
}
else if(empobj.location=='chennai'){
    return empobj.base+3000
}})
console.log(hike2HydEmp)
//find the sum of basics all emp in hyd
// let sumOfHyd =emp.reduce((empobj)=>{if(empobj.location=='Hyderabad')
//     return empobj.base+=empobj.base
// })
// console.log(sumOfHyd)
//find emp from chennai location
let chennaiEmp=emp.filter((empobj)=>empobj.location=='chennai')
console.log(chennaiEmp)
//find the yongest emp
let youngEmp=emp.reduce((acc,empobj)=>acc.age<empobj.age?acc:empobj)
console.log(youngEmp)