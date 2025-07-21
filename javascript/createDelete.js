let body = document.querySelector('body');
let table = document.querySelector('table');
let btn = document.querySelector('button');

//create element
//append
let append = document.createElement('p')
append.textContent = "Append"
body.append(append)
//prepend
let prepend = document.createElement('p')
prepend.textContent = "Prepend"
body.prepend(prepend)
//before
let before = document.createElement('p')
before.textContent = "before"
body.before(before)
let after = document.createElement('p')
after.textContent = "after"
body.after(after)


//remove
btn.textContent = "Delete"

btn.addEventListener('click', () => {
    body.removeChild(body.children[3])
})