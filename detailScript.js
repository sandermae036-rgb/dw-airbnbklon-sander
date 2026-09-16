console.log("started")

let url = location.url;

function getUrlData(url) {

    const id = new URLSearchParams(location.search).get("id")
    console.log(id)

    fetchDatat(id);
};

getUrlData(url)


async function fetchDatat(idNumber) {
    console.log(idNumber);

    try {
        const detailFromJson = await fetch("data/" + idNumber + ".json");
        console.log(detailFromJson);

        const apartmentDetail = await detailFromJson.json();
        console.log(apartmentDetail);

        insetInHTML(apartmentDetail);
    } catch (error) {

    }
}




// inset in html
function insetInHTML(data) {
    // create div with id wrapper
    let wrapper = document.createElement("div");
    wrapper.id = "wrapper";

    let main = document.createElement("main");

    // section containing the img
    let imgSection = document.createElement("div");
    imgSection.id = "imgDisplay";

    // making img -------------------------------------------------------------------------------------
    let img = document.createElement("img");

    img.setAttribute("src", "img/" + data.image);

    img.setAttribute("alt", data.subtitle);

    console.log(img);

    imgSection.append(img);


    // make font awsome icon ------------------------------------------------------------------------
    let fontAwsomeIcon = document.createElement("i");

    // give them class to make into the icon
    fontAwsomeIcon.classList.add("fa-regular", "fa-heart");

    fontAwsomeIcon.id = data.id;

    // append in the section 
    imgSection.append(fontAwsomeIcon);


    main.append(imgSection);


    // section containing the txt --------------------------------------------------------------------
    let txtSection = document.createElement("section");
    txtSection.id = "information";


    // destination ------------------------------------------------------------------
    let txtdestination = document.createElement("p");

    txtdestination.textContent = data.destination;

    txtdestination.id = "information--destination";

    txtSection.append(txtdestination)




    // title ------------------------------------------------------------------
    let txtTitle = document.createElement("h1");

    txtTitle.textContent = data.title;

    txtTitle.id = "information--title";

    txtSection.append(txtTitle)


    // subTitle ----------------------------------------------------------------------
    let txtSubtitle = document.createElement("p")

    txtSubtitle.textContent = data.subtitle;

    txtSubtitle.id = "information--subtitle";

    txtSection.append(txtSubtitle);


    // text ----------------------------------------------------------------------------
    let text = document.createElement("p");

    text.textContent = data.text;

    text.id = "information--text";

    txtSection.append(text);





    // facilities ------------------------------------------------------------------

    let facilityHeadline = document.createElement("p");

    facilityHeadline.textContent = "Faciliteter";

    txtSection.append(facilityHeadline);

    let ul = document.createElement("ul");

    data.facilities.forEach(function (facility) {

        let li = document.createElement("li");

        let txtFacility = document.createElement("p");

        txtFacility.textContent = facility

        li.append(txtFacility);

        li.append(txtFacility)

        ul.append(li);
    });

    txtSection.append(ul);



    // wrapper ------------------------------------------------------------------------- 
    main.append(txtSection);

    wrapper.append(main)

    // append wrapper in body of html ----------------- 
    document.querySelector("body").append(wrapper);
};