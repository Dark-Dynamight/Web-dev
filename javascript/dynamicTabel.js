let tbody = document.querySelector('tbody');
let button = document.querySelector('button');
let table = document.querySelector('table')
let obj = [
    { id: 100, name: 'surya', age: 21, City: 'hyd' },
    { id: 200, name: 'karthik', age: 21, City: 'banglore' },
    { id: 300, name: 'vishal', age: 20, City: 'chennai' }
]

for (let empobj of obj) {
    tbody.innerHTML += `<tr>
    <td> ${empobj.id}</td>
    <td>${empobj.name}</td>
    <td>${empobj.age}</td>
    <td>${empobj.City}</td>
    </tr>`
}
button.setAttribute('id', 'butn')
button.addEventListener('click', () => {
    if (table.hidden == true) {
        table.hidden = false;
        button.textContent = 'Hide table'
    }
    else {
        table.hidden = true;
        button.textContent = 'Show table'
    }
})