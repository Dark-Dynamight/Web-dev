function studentDetials (name,branch,college='SPEC'){
    console.log("name of the student is ",name)
    console.log("Branch of the student is ",branch)
    console.log("College of the student is ",college)
}

studentDetials("surya","ECE")
//goble variable
let a=5;

function sumofTwo (b){
    //function variable
    if(a=5){
        //block level variable
        b=25;
    }
    let sum=a+b;
    return sum;
}

console.log(sumofTwo(5))

// var is used when you want to acess variable of any level without error

//function decleration
let result1=sum1(5,5)
console.log(result1)

function sum1(a,b){
    return a+b;
}

//function expression
let sum2=function (a,b){
    return a+b;
}
let result2=sum2(5,5)
console.log(result2)