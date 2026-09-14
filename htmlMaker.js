
// imgs and their source for js create elements purposes
const imgsList = [
    {imgsrc: "andalucia.webp"},
    {imgsrc: "ecuador.webp"},
    {imgsrc: "greece.jpg"},
    {imgsrc: "norway.webp"},
    {imgsrc: "pigraItaly.jpg"},
    {imgsrc: "rome.webp"},
    {imgsrc: "santorini.webp"},
    {imgsrc: "spain.jpg"}
]


// get the apartments section
const apartments = document.querySelector("#apartments");
console.log(apartments)

imgsList.forEach(function(imgs){

    // make section
    let section = document.createElement("section");

    // give the section the class apartment 
    section.classList.add("apartment");

        // imgs ---------------------------------------------------------------
        // inside that section make an div
        let div = document.createElement("div");

            // inside the div make an img with src equial to the object
            let img = document.createElement("img");

                // inside img the source should be equial to the object currently on
                img.setAttribute("src", "img/" + imgs.imgsrc);

                // make alt alt
                img.setAttribute("alt", "Apartment");

            // append the img inside the div
            div.append(img)
            
        // append div insid the apartment
        section.append(div);


        // paragraph -------------------------------------------------
        // make a paragraph
        let paragraph = document.createElement("p");

            // text content = more
            paragraph.textContent = "More" 

        // append the paragraph with the txt 
        section.append(paragraph);

    // append the section inside apartments
    apartments.append(section);
});