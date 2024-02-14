# Web App From Scratch @cmda-minor-web 2023 - 2024

## Description

I made an one page website, with two sections, about which four countries are the best and most recent I have been to. The other section is about the country I want to go to the most. 
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

The page that is partially generated with ejs and backend, will be accessible at `http://localhost:3000/backendPage`. And the index.html page that is now hosted with the localhost, will be accessible at `http://localhost:3000`.

## Use of features

The only real features on this webiste are the turning cards. When you click on a visited country card, it turns around and then you can see my experience with it. 

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

- [x] Cool scrolling animations
- [x] Responsive design
- [x] cards that turn around when you click on them
- [x] Dynamic loaded data from the local json file
- [x] The use of a weather api on the back of the countrycard 
- [x] accessible for everyone
- [x] Darkmode

What I want to add in the future are:

- [ ] Goodlooking progressive enhancement states
- [ ] Goodlooking error and loading states
- [ ] Left over empty stars next to the filled stars

## License

My website is open-source and released under the [MIT License](LICENSE).

<!-- ## Sources -->

<!-- - Costa Rica image: 
   Costa Rica Country Information ⋅ Natucate. (n.d.). www.natucate.com. https://www.google.com/search?sca_esv=7ec80514b65b74c1&sxsrf=ACQVn09rjC2rYX7-lijLe0tIXHMCW7oUcA:1707215307796&q=costa+rica+photo&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjdjufPwJaEAxVOiv0HHe0dD0EQ0pQJegQIDRAB&biw=876&bih=1008&dpr=2#imgrc=N5eQGSEdiygMuM -->

<!-- costa rica url -->
<!-- https://www.google.com/search?sca_esv=7ec80514b65b74c1&sxsrf=ACQVn09rjC2rYX7-lijLe0tIXHMCW7oUcA:1707215307796&q=costa+rica+photo&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjdjufPwJaEAxVOiv0HHe0dD0EQ0pQJegQIDRAB&biw=876&bih=1008&dpr=2#imgrc=N5eQGSEdiygMuM -->


<!-- bangkok url -->
<!-- https://www.google.com/search?q=bankok+photo&tbm=isch&ved=2ahUKEwjNtZirw5aEAxUZuP0HHbVwCK8Q2-cCegQIABAA&oq=bankok+photo&gs_lp=EgNpbWciDGJhbmtvayBwaG90bzIHEAAYgAQYE0jHEFAAWIsOcAF4AJABAJgBhQKgAaIGqgEFNS4wLjK4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICCBAAGAcYHhgTwgIGEAAYBxgewgIGEAAYCBgeiAYB&sclient=img&ei=pAzCZc3TEpnw9u8PteGh-Ao&bih=1008&biw=876#imgrc=cfEz7jE5cRkDPM&imgdii=XQwwvypFIlFkpM -->

<!-- switzerland url -->
<!-- https://www.google.com/search?sca_esv=7ec80514b65b74c1&sxsrf=ACQVn0_fHrRjjEt79YKktw6hZh1DHpTP_g:1707216429392&q=switzerland&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiu_s_mxJaEAxUbgv0HHYCGBlcQ0pQJegQICxAB&biw=876&bih=1008&dpr=2#imgrc=SmNTc-Wnwh4_qM -->

<!-- croatio url -->
<!-- https://www.google.com/search?sca_esv=7ec80514b65b74c1&sxsrf=ACQVn08gNPCsP1mxSxOPvR1aFHKWcjRyfA:1707216573478&q=croatia&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwjJs6qrxZaEAxX3iv0HHcphAwsQ0pQJegQIDhAB&biw=876&bih=1008&dpr=2#imgrc=bO8T9_3V5kdliM -->

<!-- star url -->
<!-- https://www.google.com/search?q=star+image+png&tbm=isch&ved=2ahUKEwiZ3Py6h5mEAxWTn_0HHcTyAREQ2-cCegQIABAA&oq=star+image+png&gs_lp=EgNpbWciDnN0YXIgaW1hZ2UgcG5nMgcQABiABBgTMggQABgHGB4YEzIIEAAYBxgeGBMyCBAAGAcYHhgTMggQABgHGB4YEzIIEAAYBxgeGBMyCBAAGAcYHhgTMggQABgHGB4YEzIIEAAYBxgeGBMyCBAAGAcYHhgTSN4JUOwHWOwHcAB4AJABAJgBwAGgAdsCqgEDMC4yuAEDyAEA-AEBigILZ3dzLXdpei1pbWfCAgQQIxgnwgIIEAAYCBgeGBOIBgE&sclient=img&ei=gmDDZZmTHpO_9u8PxOWHiAE&bih=1008&biw=1222#imgrc=LuWPo96zsnTMgM&imgdii=pMxVWPlb7sjnBM -->

<!-- photo japan Lands -->
<!-- https://www.google.com/search?sca_esv=30ba42da69d2c19f&sxsrf=ACQVn08hCVNWO1crst8OLfgsMzrVDrK20Q:1707140830784&q=japan+images&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwj_mbOWq5SEAxUHi_0HHQCeDp4Q0pQJegQICxAB&biw=767&bih=1008&dpr=2#imgrc=xjyss59VuaRNfM&imgdii=Wtux9k75AD6k6M -->

<!-- photo japan city -->
<!-- https://www.google.com/search?sca_esv=30ba42da69d2c19f&sxsrf=ACQVn08hCVNWO1crst8OLfgsMzrVDrK20Q:1707140830784&q=japan+images&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwj_mbOWq5SEAxUHi_0HHQCeDp4Q0pQJegQICxAB&biw=767&bih=1008&dpr=2#imgrc=tfm156pVr6kE4M -->

<!-- placeholder img -->
<!-- https://www.google.com/search?sca_esv=e723f428ea636eb3&sxsrf=ACQVn0_aPFc9E4Y6aMkqtiPFvyzvXsgd5Q:1707475737630&q=placeholder+img&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjW5bbmip6EAxWy3AIHHS_wBX0Q0pQJegQICRAB&biw=688&bih=1008&dpr=2#imgrc=vJkCGU5orcVcLM -->


<!-- https://phuoc.ng/collection/html-dom/check-if-an-element-is-in-the-viewport/ -->

<!-- // ** source chat gpt
//prompt:
// How to do this with js without doing it manually? 
// First the list must be combined with the ‘|’ character:
// London,UK|Paris,France|Tokyo,Japan|Cape Town, South Africa
// And then it must be encoded for transmission:
// London%2CUK%7CParis%2CFrance%7CTokyo%2CJapan%7CCape%20Town%2C%20South%20Africa -->

<!-- loading gif -->
<!-- /* https://www.google.com/search?q=gif+loading&oq=gif+loading&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDIzNzNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#vhid=ug9A_WVkB4KZFM&vssid=l */ -->

<!-- https://dev.to/frehner/css-vh-dvh-lvh-svh-and-vw-units-27k4 -->