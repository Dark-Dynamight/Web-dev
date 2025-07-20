let button = document.querySelector('button');
let div = document.querySelector('div');
let obj = [
    { id: 100, name: 'surya', age: 21, City: 'hyd' },
    { id: 200, name: 'karthik', age: 21, City: 'banglore' },
    { id: 300, name: 'vishal', age: 20, City: 'chennai' }
]
let para = document.createElement('p');
for (let empobj of obj) {
    para.innerHTML += `${empobj.id} ${empobj.name} ${empobj.age} ${empobj.City}<br>`
    div.appendChild(para)
}
button.addEventListener('click', () => {
    if (para.hidden == true) {
        para.hidden = false;
        button.textContent = 'Hide para'
    }
    else {
        para.hidden = true;
        button.textContent = 'Show para'
    }
})