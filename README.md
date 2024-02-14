# Web App From Scratch @cmda-minor-web 2023 - 2024

## Description

I made an one page website, with two sections, about which four countries are the besta and most recent I have been to. The other section is about the country I want to go to the most. 
These two sections snap when you scroll, and when you enter the last section, you can see some beautifull scroll animtions.

This assignment was more focused on Javascript and API's. Almost all the data you see on the page is loaded dynamiclly out of a json file and a weather api. 

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->
![Here is a picture of the frontend of my website.](docs/images/shinyFrontEndPictureS1.png  "Shiny frontend picture of my website")

<!-- Maybe a table of contents here? 📚 -->

## Table of contents

- Installation
- If you want the backend too
- Use of features
- External data source properties
- Whishlist
- License
- Sources

<!-- features -->

<!-- How about a section that describes how to install this project? 🤓 -->

## Installation

1. Clone the repository:

```
git clone https://github.com/JopMolenaar/web-app-from-scratch-2324.git
```

2. Open the cloned file with your code editor and start coding!

### If you want the backend too

1. Navigate to the project directory:

   ```
   cd web-app-from-scratch-2324
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the application:

   ```
   npm start
   ```

- The page that is partially generated with ejs and backend, will be accessible at `http://localhost:3000/backendPage`.
- The index.html page that is now hosted with the localhost, will be accessible at `http://localhost:3000`.

<!-- ...but how does one use this project? What are its features 🤔 -->

## Use of features

<!-- What external data source is featured in your project and what are its properties 🌠 -->

## External data source properties

The external data source that I use is the api from visualcrossing.com.
I use this api to get the current temperature of the countries that I have visited. 
You need an api key for this api, and you will get one when you make an account. 

The api query that I use is:
```
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=${apiKey}&locations=${encodedCityList}
```

The encodedCityList looks like: `London%2CUK%7CParis%2CFrance%7CTokyo%2CJapan%7CCape%20Town%2C%20South%20Africa`, but is made like this in the js.

The response consists out of four countries, with the current weathercondition and the upcoming 7 days weatherconditions.
For more info: [www.visualcrossing.com/...](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/)

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

## Whishlist

What I want to add in the future are:

- 
- 
- 

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->

## License

My website is open-source and released under the [MIT License](LICENSE).

## Sources