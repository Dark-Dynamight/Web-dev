//function decleration
let result1 = sum1(5, 5)
console.log(result1)

function sum1(a, b) {
    return a + b;
}

//function expression
let sum2 = function (a, b) {
    return a + b;
}
let result2 = sum2(5, 5)
console.log(result2)