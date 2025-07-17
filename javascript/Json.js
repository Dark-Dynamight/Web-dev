let x = 5;
function fun() {
    x = 10;
    console.log(x)
}
fun()
console.log(x)

let arr = ["apple", "banna", "cherry", "date"]
let result = arr.splice(1, 2, "orange", "grapes")
console.log(result)