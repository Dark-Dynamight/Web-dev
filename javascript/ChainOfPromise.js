let state = false

// Creation of Promise
let prm = new Promise((fulfiled, rejected) => {
    if (state == true) {
        fulfiled(1);
    } else {
        rejected("error");
    }
});

// Consume Promise
prm
    .then(message => message + 1)
    .then(message => message + 2)
    .then(message => console.log(message))
    .catch(err => console.log(err))