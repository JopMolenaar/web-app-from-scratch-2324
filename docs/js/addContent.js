/**
 * @Author:            Jop Molenaar
 * @Date created:       05-02-2024
 * @Description:        Store a new device in the database
 */

let root = document.documentElement;

// Javascript is working so set the stateText that the js is not working on display none
document.getElementById("stateText").style.display = "none";

// loading state
window.onload = fetchData();

/**
 * Async function to fetch the data when the document windows loads.
 * @param {Object} data - The data out of the fetched url
 */
async function fetchData() {
    // loader
    document.getElementById("stateText").style.display = "flex";
    document.querySelector("#stateText p").textContent =
        "Loading content on the page";
    root.style.setProperty("--color-state", "black");
    document.querySelector("#stateText img").src = "images/loadGif.gif";
    try {
        const response = await fetch("./info.json", {
            method: "GET",
        });
        const jdata = await response.json().then((data) => {
            if (data) {
                createCards(data);
                addContentToBucketListCountry(data);
                document.getElementById("stateText").style.display = "none";
            } else {
                document.getElementById("stateText").style.display = "flex";
                document.querySelector("#stateText p").textContent =
                    "Unfortunately there is no content on the page yet.";
                document.querySelector("#stateText img").src = "";
            }
        });
    } catch (_error) {
        console.error("there is an error", _error);
        document.getElementById("stateText").style.display = "flex";
        document.querySelector("#stateText p").textContent =
            "There is an error with fetching the data";
        document.querySelector("#stateText img").src = "";
        root.style.setProperty("--color-state", "red");
    }
}
// https://stackoverflow.com/questions/75564215/show-loading-animation-while-api-is-working-and-show-error

/**
 * Add the temperature of the country to the country card. We first need to calculate fahrenheit to celsius.
 * And after that look at which card to append the p with the temp.
 * @param {Object} weatherData - The data out of the fetched weather api url
 * @param {String} country - The data out of the fetched url
 * @param {Element} backDiv - The data out of the fetched url
 */
const addTempToCountries = (weatherData, country, backDiv) => {
    weatherData.locations.forEach((location) => {
        const address = location.address;
        const tempFahrenheit = location.days[0].temp;
        const fahrenheitToCelsius = (tempFahrenheit) => {
            // formula: °C = (°F - 32) × 5/9
            tempFahrenheit = tempFahrenheit - 32;
            tempFahrenheit = (tempFahrenheit * 5) / 9;
            tempFahrenheit = Math.round(tempFahrenheit);
            return tempFahrenheit;
        };
        const tempCelsius = fahrenheitToCelsius(tempFahrenheit);
        if (address.includes(country)) {
            console.log(country);
            const countryTemp = document.createElement("p");
            countryTemp.textContent = `${tempCelsius} °C`;
            backDiv.append(countryTemp);
        }
    });
};

/**
 * Create four cards
 * @param {Object} data - The data out of the fetched url
 */
const createCards = async (data) => {
    const countryCards = data.visitedCountries.slice(0, 4); // Limit to the first four elements

    const weatherData = await getCountryWeather(countryCards);
    // Stringify the weatherData object before storing it in localStorage
    localStorage.setItem("weatherData", JSON.stringify(weatherData));

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
        const contentScrollDiv = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = country.experience;
        const countryName = document.createElement("h2");
        countryName.textContent = country.country;
        const img = document.createElement("img");

        img.src = country.imgUrl;
        img.alt = country.imgAlt;
        img.setAttribute("loading", "lazy");

        const listWithActivities = document.createElement("ul");

        country.recommendations.forEach((recommendation) => {
            const listItemWithActivity = document.createElement("li");
            listItemWithActivity.textContent = recommendation;
            listWithActivities.append(listItemWithActivity);
        });

        const section = document.createElement("section");
        for (let index = 0; index < country.rating; index++) {
            const svgStar = document.createElement("img");
            svgStar.setAttribute("loading", "lazy");
            svgStar.src = "images/star.svg";
            section.append(svgStar);
            // TODO 5 - rating = add more empty stars
        }

        contentScrollDiv.append(p);
        contentScrollDiv.append(listWithActivities);
        contentScrollDiv.append(section);
        backDiv.append(contentScrollDiv);
        // const weatherDataStorage = JSON.parse(
        //     localStorage.getItem("weatherData")
        // );
        if (weatherData) {
            addTempToCountries(weatherData, country.country, backDiv);
        } else {
            const countryTemp = document.createElement("p");
            countryTemp.textContent = `-- °C`;
            backDiv.append(countryTemp);
        }

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
    const bucketListCountryTitle = document.querySelector(
        "#bucketListCountry span"
    );
    const reason = document.querySelector("#reason");
    const bucketListCountry = data.bucketList.slice(0, 1);
    const bucketList = document.querySelector("#whatDoIWantToVisit ul");
    const bucketListTitle = document.querySelector(
        "#whatDoIWantToVisit h3 span"
    );
    const headerImg = document.querySelector(
        "main > div > section:nth-child(2) > img:nth-child(3)"
    );
    const cornerImg = document.querySelector(
        "main > div > section:nth-child(2) > img:nth-child(4)"
    );
    const yinYangImg = document.querySelector(
        "main > div > section:nth-child(2) > img:nth-child(5)"
    );
    headerImg.src = bucketListCountry[0].imagesUrl[0];
    headerImg.alt = bucketListCountry[0].imagesAlt[0];
    cornerImg.src = bucketListCountry[0].imagesUrl[1];
    cornerImg.alt = bucketListCountry[0].imagesAlt[1];
    yinYangImg.src = bucketListCountry[0].imagesUrl[2];
    yinYangImg.alt = bucketListCountry[0].imagesAlt[2];
    bucketListCountry[0].activities.forEach((activity) => {
        const li = document.createElement("li");
        li.textContent = activity.activity;
        bucketList.append(li);
    });
    bucketListCountryTitle.textContent = bucketListCountry[0].country;
    bucketListTitle.textContent = bucketListCountry[0].country;
    reason.textContent = bucketListCountry[0].reason;
};

/**
 * This function listens for a click on an element and looks if the element is the one we are looking for.
 * After that we toggle or remove the inner-card-flipped class that rotates the element 180deg
 * @param {Element} event - An element that got clicked
 */
document.body.addEventListener("click", (event) => {
    const parent = event.target.parentElement; // Get the parent of the element that is clicked
    const secondParent = parent.parentElement; // Get the parent of the parent of the element that is clicked
    const cards = document.querySelectorAll(".flip-card-inner"); // Get all cards (not the li but the item that needs to be flipped)
    if (secondParent.classList.contains("flip-card-inner")) {
        cards.forEach((card) => {
            if (card === secondParent || card === parent) {
                // if the card is already open that is clicked, toggle the class
                secondParent.classList.toggle("inner-card-flipped");
            } else {
                // else flip all the cards to the front side
                card.classList.remove("inner-card-flipped");
            }
        });
    } else if (parent.classList.contains("flip-card-inner")) {
        parent.classList.toggle("inner-card-flipped");
    } else {
        // If somewhere on the body is clicked, all cards flip to the front side of the card
        cards.forEach((card) => {
            card.classList.remove("inner-card-flipped");
        });
    }
});
