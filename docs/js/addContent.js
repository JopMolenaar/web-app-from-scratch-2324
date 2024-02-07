/**
 * @Author:            Jop Molenaar
 * @Date created:       05-02-2024
 * @Description:        Store a new device in the database
 */

// Fetch the json file
fetch("./reizen.json")
    .then((response) => response.json())
    .then((data) => {
        createCards(data);
        addContentToBucketListCountry(data);
    });

/**
 * Create four cards
 * @param {Object} data - The data out of the fetched url
 */
const createCards = (data) => {
    const countryCards = data.visitedCountries.slice(0, 4); // Limit to the first four elements
    const cardList = document.querySelector("#cardList");
    countryCards.forEach((country) => {
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("flip-card-inner");
        const backDiv = document.createElement("div");
        backDiv.classList.add("flip-card-back");
        const frontDiv = document.createElement("div");
        frontDiv.classList.add("flip-card-front");
        const li = document.createElement("li");
        li.classList.add("flip-card");
        const p = document.createElement("p");
        p.textContent = country.experience;
        const countryName = document.createElement("h2");
        countryName.textContent = country.country;
        const img = document.createElement("img");
        img.src = country.imgUrl;

        const section = document.createElement("section");
        for (let index = 0; index < country.rating; index++) {
            const svgStar = document.createElement("img");
            svgStar.src = "images/star-outline.svg";
            section.append(svgStar);
        }
        backDiv.append(section);

        // backDiv.append(countryName);
        backDiv.append(p);

        frontDiv.append(img);
        frontDiv.append(countryName);

        innerDiv.append(frontDiv);
        innerDiv.append(backDiv);
        li.append(innerDiv);
        cardList.append(li);
    });
};

/**
 * Add content to the second section of the page
 * @param {Object} data - The data out of the fetched url
 */
const addContentToBucketListCountry = (data) => {
    const bucketListTitle = document.querySelector("#bucketListCountry");
    const reason = document.querySelector("#reason");
    const bucketListCountry = data.bucketList.slice(0, 1);
    const bucketList = document.querySelector("#whatDoIWantToVisit");

    bucketListCountry[0].activities.forEach((activity) => {
        const li = document.createElement("li");
        li.textContent = activity.activity;
        bucketList.append(li);
    });
    bucketListTitle.textContent =
        "I still want to go to " + bucketListCountry[0].country;
    reason.textContent = bucketListCountry[0].reason;
};

// TODO explanation
/**
 * This function listens for a click on an element and looks if the element is the one we are looking for.
 * After that we toggle or remove the inner-card-flipped class that rotates the element 180deg
 * @param {Element} event - An element that got clicked
 */
document.body.addEventListener("click", (event) => {
    const parent = event.target.parentElement;
    const secondParent = parent.parentElement;
    const cards = document.querySelectorAll(".flip-card-inner");
    if (secondParent.classList.contains("flip-card-inner")) {
        cards.forEach((card) => {
            if (card === secondParent || card === parent) {
                secondParent.classList.toggle("inner-card-flipped");
            } else {
                card.classList.remove("inner-card-flipped");
            }
        });
    } else if (parent.classList.contains("flip-card-inner")) {
        parent.classList.toggle("inner-card-flipped");
    } else {
        cards.forEach((card) => {
            card.classList.remove("inner-card-flipped");
        });
    }
});
