
console.log("started")

const url = "data/destinations.json";

// fetch the json file
async function fetchDestination(url, newTry) {
    console.log(newTry);

    try {
        const firstResponse = await fetch(url);
        console.log(firstResponse);

        const data = await firstResponse.json();
        console.log(data.destinations);

        placeInHTML(data.destinations)

    } catch (error) {

    }
}

fetchDestination(url)

// making the html ------------------------------------------------------------------------------------------
// get the apartments section

const apartments = document.querySelector("#apartments");
console.log(apartments)

function placeInHTML(apartmentData) {

    apartmentData.forEach(function (apartment) {
        // make section
        let section = document.createElement("section");

        // give the section the class apartment 
        section.classList.add("apartment");

        // give the section the id from the destination 
        section.id = apartment.id;

        // imgs ---------------------------------------------------------------
        // inside that section make an div
        let div = document.createElement("div");

        // inside the div make an img with src equial to the object
        let img = document.createElement("img");

        // inside img the source should be equial to the object currently on
        img.setAttribute("src", "img/" + apartment.image);

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

}
