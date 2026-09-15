console.log("script started");
const url = "data/destinations.json";

// fetch the json file
async function fetchDestination(url, newTry) {

    try {
        const firstResponse = await fetch(url);
        console.log(firstResponse);

        const data = await firstResponse.json();
        console.log(data);

        placeInHTML(data.destinations)

    } catch (error) {

    }
}






fetchDestination(url)

// making the html ------------------------------------------------------------------------------------------
// get the apartments section

const apartments = document.querySelector("#apartments");
console.log(apartments);


function placeInHTML(apartmentList) {

    apartmentList.forEach(function (apartment) {
        // make section
        let section = document.createElement("section");
        console.log(section);

        // give the section the class apartment 
        section.classList.add("apartment");

        // give the section the id from the destination 
        section.id = apartment.id;

        // imgs ---------------------------------------------------------------
        // inside that section make an div
        let div = document.createElement("div");
        console.log(div);

        // inside the div make an img with src equial to the object
        let img = document.createElement("img");

        // inside img the source should be equial to the object currently on
        img.setAttribute("src", "img/" + apartment.image);

        // make alt alt
        img.setAttribute("alt", "Apartment");

        // append the img inside the div
        div.append(img);

        // append div insid the apartment
        section.append(div);


        // anchor -------------------------------------------------
        // make a anchor tag
        let anchor = document.createElement("a");

        // text content = more
        anchor.textContent = "More";

        // set attribute to the href of the detail site
        anchor.setAttribute("href", "detail.html" + "?id=" + apartment.id);

        // make it target blank because its better
        anchor.setAttribute("target", "_blank");
        // append the paragraph with the txt 
        section.append(anchor);


        // append the section inside apartments
        apartments.append(section);

    });

}


// function showDetail () {
//     console.log(this.id)

//     window.location = new URL();
// };