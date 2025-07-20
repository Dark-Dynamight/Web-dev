let input = document.querySelector('input');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    //read input
    let username = input.value
    //create h2
    let h2 = document.createElement('h2');
    //assigning text to h2
    h2.textContent = username;
    document.body.appendChild(h2);
})

