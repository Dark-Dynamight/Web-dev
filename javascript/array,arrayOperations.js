//arrays
let names = ['surya', 'karthik', 'sai']
let arr = [1, 2, 3, 4]
let arr1 = [1, 'hi', true]

console.log(names)
console.log(arr)
console.log(arr1)

//print whole array

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

//for-of
for (let v of arr) {
    console.log(v)
}

// Array operations
// insert at start
arr.unshift(3)
console.log(arr)
// insert at end
arr.push(5)
console.log(arr)
//insert in between
arr.splice(3, 0, 5, 10)
console.log(arr)
//delete at start
arr.shift()
console.log(arr)
//delete at end
arr.pop()
console.log(arr)
//delete in between
arr.splice(2, 1)
console.log(arr)