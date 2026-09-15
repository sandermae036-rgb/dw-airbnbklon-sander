console.log("started")

let url = location.url;

function getUrlData (url) {

    const id = new URLSearchParams (location.search).get("id")
    console.log(id)

    fetchDatat(id);
};

getUrlData(url)


async function fetchDatat(idNumber) {
    console.log(idNumber)

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
function insetInHTML (data) {
    // create div with id wrapper
    let wrapper = document.createElement("div");
    wrapper.id = "wrapper";



    // section containing the img
        let imgSection = document.createElement("div");
        imgSection.id = "imgDisplay";


            let img = document.createElement("img");

            img.setAttribute("src", "img/" + data.image);

            img.setAttribute("alt", data.subtitle);

            console.log(img);

            imgSection.append(img);


        wrapper.append(imgSection);


        // section containing the txt
        let txtSection = document.createElement("section");
        txtSection.id = "information";





        wrapper.append(txtSection);

    // append wrapper in js 
    document.querySelector("body").append(wrapper);
};