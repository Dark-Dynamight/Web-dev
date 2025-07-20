let username = document.querySelector('.username');
let age = document.querySelector('.age');
let date = document.querySelector('.dob');
let form = document.querySelector('form');
let body = document.querySelector('body');
let tbody = document.querySelector('tbody');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = username.value
    let Age = age.value
    let dob = date.value
    tbody.innerHTML += `<tr>
        <td>${name}</td>
        <td>${Age}</td>
        <td>${dob}</td>
        </tr>`
})
