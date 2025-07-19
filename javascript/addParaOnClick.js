let div = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let para = document.createElement('p');
    para.textContent = "hello"
    div.appendChild(para)
})