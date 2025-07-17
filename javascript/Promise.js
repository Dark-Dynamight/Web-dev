let mystatus = false;
//create promise
let promsebyme = new Promise((fulfiled, rejected) => {
    setTimeout(() => {
        if (mystatus == true) {
            fulfiled("Hey there")
        } else {
            rejected("sorry")
        }
    }, 5000);
})
//conusme promise
promsebyme
    .then((message) => {
        console.log("Message is: " + message)
    })
    .catch((err) => {
        console.log("error is: " + err)
    })