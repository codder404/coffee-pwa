const container = document.querySelector(".container");
const coffees = [{
  name: "Perspiciatis",
  image: "images/coffee1.jpg",
  url: "https://www.youtube.com/"
}, {
  name: "Voluptatem",
  image: "images/coffee2.jpg",
  url: "https://cursos.erickwendel.com/courses/448292/lectures/8539753"
}, {
  name: "Explicabo",
  image: "images/coffee3.jpg"
}, {
  name: "Rchitecto",
  image: "images/coffee4.jpg"
}, {
  name: " Beatae",
  image: "images/coffee5.jpg"
}, {
  name: " Vitae",
  image: "images/coffee6.jpg"
}, {
  name: "Inventore",
  image: "images/coffee7.jpg"
}, {
  name: "Veritatis",
  image: "images/coffee8.jpg"
}, {
  name: "Accusantium",
  image: "images/coffee9.jpg"
}, ]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({
      name,
      image,
      url
    }) =>
    (output += `
        <div class="card">
          <img class="card--image" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href=${url}>${name}</a>
        </div>
      `)
  )
  container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCoffees)