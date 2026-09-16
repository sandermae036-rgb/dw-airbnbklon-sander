console.log("script started");
const url = "data/destinations.json";

// fetch the json file
async function fetchDestination(url, newTry) {

    try {
        const firstResponse = await fetch(url);

        const data = await firstResponse.json();

        placeInHTML(data.destinations)

    } catch (error) {

    }
}






fetchDestination(url)

// making the html ------------------------------------------------------------------------------------------
// get the apartments section

const apartments = document.querySelector("#apartments");


function placeInHTML(apartmentList) {

    apartmentList.forEach(function (apartment) {
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
        div.append(img);

        // append div insid the apartment
        section.append(div);


        // the utility  -------------------------------------------------

        // font awsome ----------------------------------- 
        // make font awsome icon 
        let fontAwsomeIcon = document.createElement("i");

        // give them class to make into the icon
        fontAwsomeIcon.classList.add("fa-regular", "fa-heart");
    
        fontAwsomeIcon.id = apartment.id;

        // append in the section 
        section.append(fontAwsomeIcon);


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


    // favorite function --------------------------------------------------------------------------------------
    favorit();
}





function favorit() {
    const allIcons = document.querySelectorAll(".fa-heart")

    allIcons.forEach(function (icon) {

        icon.addEventListener("click", addToFavorits);
        
        function addToFavorits () {
            if (this.classList.contains("fa-regular")) {
                // visually change the favorite button to match if it is pressed or not
                this.classList.remove("fa-regular")

                this.classList.add("fa-solid")

                localStorage.setItem("is apartment number " + this.id + " favorited?", true)

            } else if (this.classList.contains("fa-solid")) {
                this.classList.remove("fa-solid");

                this.classList.add("fa-regular");

                localStorage.setItem("is apartment number " + this.id + " favorited?", false)
            }
        }
    });

    console.log("helll")

    allIcons.forEach(function (icon) {
        console.log(localStorage.getItem("is apartment number " + icon.id + " favorited?") == "true")

        if (localStorage.getItem("is apartment number " + icon.id + " favorited?") == "true") {
            icon.classList.remove("fa-regular")

            icon.classList.add("fa-solid");
            

            return
        } else {
            icon.classList.remove("fa-solid")

            icon.classList.add("fa-regular");

            return
        }
    });
}