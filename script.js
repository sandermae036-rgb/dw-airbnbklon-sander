
// imgs and their source for js create elements purposes
const imgs = [
    {img: "andalucia.webp"},
    {img: "ecuador.webp"},
    {img: "greece.jpg"},
    {img: "norway.webp"},
    {img: "pigraItaly.jpg"},
    {img: "rome.webp"},
    {img: "santorini.webp"},
    {img: "spain.jpg"}
]

const apartments = document.querySelector("#apartments");
console.log(apartments)

imgs.forEach(function(img){
    let section = document.createElement("section");

    section.classList.add("apartment");

    apartments.append(section);
});