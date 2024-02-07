/**
 * @Author:            Jop Molenaar
 * @Date created:       05-02-2024
 * @Date updated:       06-02-2024
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
    console.log(data);
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

        backDiv.append(p);
        backDiv.append(countryName);

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
    bucketListTitle.textContent =
        "I still want to go to " + bucketListCountry[0].country;
    reason.textContent = bucketListCountry[0].reason;
};

const cardsToFlip = document.querySelectorAll(".flip-card");
cardsToFlip.forEach((card) => {
    card.addEventListener("click", () => {
        console.log(card);
    });
});
