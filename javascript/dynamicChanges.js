let heading = document.querySelector("#heading");
// let buton = document.querySelector(".buton");
let image = document.querySelector("img");
let div = document.querySelector("div");
buton.addEventListener('click', () => {
    heading.textContent = 'Dynamic Changes'
    heading.style.color = 'white'
    heading.style.fontSize = '2rem'
    heading.style.backgroundColor = 'green'
    image.src = "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
    div.innerHTML = div.innerHTML + '<h1 class="in">Heading</h1>'
});
