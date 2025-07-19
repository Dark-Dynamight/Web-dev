let tbody = document.querySelector('tbody');

let obj = [
    { id: 100, name: 'surya', age: 21, City: 'hyd' },
    { id: 200, name: 'karthik', age: 21, City: 'banglore' },
    { id: 300, name: 'vishal', age: 20, City: 'chennai' }
]

for (let empobj of obj) {
    tbody.innerHTML += `<tr>
    <td> ${empobj.id}</td >
    <td>${empobj.name}</td>
    <td>${empobj.age}</td>
    <td>${empobj.City}</td>
    </tr>`
}