function test1(){
    return "hello"
}
console.log(test1())
console.dir(test1)

function test(a){
    console.log("Hi ",a)
    a()
}

// test(10)
// test('hello')
// test(true)
// test({x:10})

// test([10,20])
test(function(){
    console.log("hello")
})

//array advance operations


// //filter greater than 50
// let result1=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>50){
//         result1.push(arr[i])
//     }
// }
// console.log(result1)

// // using callback function
// let result2=arr.filter(function(element){return element>40})
// console.log(result2)

// //using callback and arrow function
// result3=arr.filter((element)=>element>40)
// console.log(result3)

let arr=[10,-20,35,70,55,205,105]
//selection elements
let selection=arr.filter((elements)=>elements>40)
console.log(selection)
//modify all elements
let modify1=arr.map((elements)=>elements+10)
console.log(modify1)
// modify specific elements
let modify2=arr.map((elements)=>{
    if(elements<40){
        return elements+10
    }
    else{
        return elements+20
    }
})
console.log(modify2)
//forEach iteration
arr.forEach((elements,index)=>console.log('vale of index',index,'is',elements))
//search
let search=arr.find((elements)=>elements==55)
if(search==undefined){
    console.log("element not found")
}
else{
    console.log("element found")
}
//search index
let searchIndex=arr.findIndex(element=>element==55)
if(searchIndex==-1){
    console.log("element not found")
}
else{
    console.log("element found")
}