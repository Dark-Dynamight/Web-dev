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