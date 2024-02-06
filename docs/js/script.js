/*
 *
 *
 *
 *
 **/

// Fetch the json file
fetch("../../reizen.json")
    .then((response) => response.json())
    .then((data) => createCards(data));

//  Create four cards
const createCards = (data) => {
    console.log(data);
    const countryCards = data.visitedCountries.slice(0, 4); // Limit to the first four elements
    const cardList = document.querySelector("#cardList");

    countryCards.forEach((country) => {
        const li = document.createElement("li");
        li.textContent = country.country;
        cardList.append(li);
    });
};
