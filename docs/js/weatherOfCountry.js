// Source api: https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/

const apiKey = "447K8VSZX6DNCFJBVSAJJ6HM8"

/**
 * Get the json from the weather api
 * @param {Element} countries - The four countries I want the weather from
 */
const getCountryWeather = async (countries) => {
    try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Note: Month is zero-based, so January is 0
        const day = currentDate.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}T13:00:00`;
    
        const cityList = `${countries[0].capital},${countries[0].country}|${countries[1].capital},${countries[1].country}|${countries[2].capital},${countries[2].country}|${countries[3].capital}, ${countries[3].country}`;
        // Encode the city list
        const encodedCityList = cityList
            .split('|')
            .map(city => {
                const [name, country] = city.split(',');
                const encodedName = encodeURIComponent(name.trim());
                const encodedCountry = encodeURIComponent(country.trim());
                return `${encodedName},${encodedCountry}`;
            })
            .join('%7C');
        // **
        const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=${apiKey}&locations=${encodedCityList}`
        let countryWeathersData = await fetch(api)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });
        return await countryWeathersData;
    } catch (error) {
        console.error(error);
    }
};

// ** source chat gpt
//prompt:
// How to do this with js without doing it manually? 
// First the list must be combined with the ‘|’ character:
// London,UK|Paris,France|Tokyo,Japan|Cape Town, South Africa
// And then it must be encoded for transmission:
// London%2CUK%7CParis%2CFrance%7CTokyo%2CJapan%7CCape%20Town%2C%20South%20Africa