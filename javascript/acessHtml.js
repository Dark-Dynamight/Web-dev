let headElement = document.head;
console.log(headElement);

let BodyElement = document.body;
console.log(BodyElement);

let h5 = document.getElementsByTagName('h1');
console.log(h5)

let h = document.getElementById("heading");
console.log(h);

// querySelector
// By Tages
let ByTags = document.querySelector("h1");
console.log(ByTags)
// By Id
let ById = document.querySelector("#hello");
console.log(ById)
// By class
let ByClass = document.querySelector(".hi");
console.log(ByClass)

// querySelectorAll
let h1 = document.querySelectorAll("h1");
console.log(h1)


let body = document.querySelector('body');

//acess Children
console.log(body.children)
// acess Children by index
console.log(body.children[2])
//acess by firstElementChild
console.log(body.firstElementChild)
//acess by lastElementChild
console.log(body.lastElementChild)
//acess by firstChild
console.log(body.firstChild)
//acess by lastChild
console.log(body.lastChild)
//acess by iteam index
console.log(body.children.item(2))

//acess parentElement
console.log(h.parentElement)

//acess next siblings
console.log(ById.nextElementSibling)
//acess previous siblings
console.log(ById.previousElementSibling)

//hide
body.hidden = true;
body.hidden = false;