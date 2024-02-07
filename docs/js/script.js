/**
 * @Author:            Jop Molenaar
 * @Date created:       05-02-2024
 * @Date updated:       06-02-2024
 * @Description:        Store a new device in the database
 */

// Fetch the json file
fetch("reizen.json")
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
        const li = document.createElement("li");
        const countryName = document.createElement("h2");
        countryName.textContent = country.country;
        const img = document.createElement("img");
        img.src = country.imgUrl;
        li.append(countryName);
        li.append(img);
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
