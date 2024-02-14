# Proces verslag Jop Molenaar

## Intro

## Dag 1

Beetje beginnen met mijn website, json content maken, en al inladen

## Dag 2

Verder met mijn website, meer focussen op de content en UI, backend opgezet maar wist nog niet precies wat ik er mee moest.

## Dag 3

Verder met mijn website, flip kaartjes werkend gekregen en als je omlaag scrollt dan beweegt de header img van japan

## Dag 4

Ging verder met mijn website en vandaag viel het kwartje met template engines en backend ipv create alle elements met js :0

Ik dacht de heleboel om te gooien maar daarna bedacht ik bij mezelf dat dat meer backend is en ik dan minder vanilla js schrijf terwijl dat de opdracht is. Ook is het meer werk en wil ook genoeg andere dingen nog doen. Het is fijn dat het kwartje viel want dat betekent dat ik weer een extra inzicht heb over hoe het web kan werken.

Ook heb ik deze dag feedback gekregen en deze punten waren:

-

## Dag 5

Vandaag ging ik bezig met de scroll animaties. Ik had hier al eerder mee gewerkt maar kon de code niet terug vinden, and was begin deze week al bezig met zoeken naar de juiste code maar kon ik niet vinden, totdat ik deze video tegen kwam:
Dit kwam echt super goed uit want het gebruikt geen js, wat we ook zo min mogelijk moesten gebruiken uit kilians presentatie, en het had de scroll animaties die ik nodig had.

Wel kwam ik tegen een groot probleem. Dit was namelijk dat ik een scroll snap heb gebruikt voor mijn 2 secties, als je omlaag scrollde snap je op de tweede section en omhoog op de eerste. Dit is leuk, maar kan niet op het main element worden gedaan. Daarom had ik een div gebruikt maar dan scroll je niet op de pagina, maar op de div, dus dan werkt `animation-timeline: view();` niet.
En aangezien ik de js code al had voor de header img was het best ez om dat dan ook te doen voor de andere images.

Ik had dit:

```js
const div = document.querySelector("main > div");

let visible;
const element = document.querySelector(
    "main div > section:nth-child(2) img:nth-child(4)"
);

const isInViewport = function (ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
};

div.addEventListener("scroll", function () {
    visible = isInViewport(element);
    if (visible === true) {
        element.classList.add("inViewPort");
    } else {
        element.classList.remove("inViewPort");
    }
});
```

Naar dit:

```js
const div = document.querySelector("main > div");

let visible;

const imagesToAnimate = [
    {
        img: "main div > section:nth-child(2) img:nth-child(4)",
        topOrBottom: "bottom",
    },
    {
        img: "main > div > section:nth-child(2) img:nth-child(5)",
        topOrBottom: "top",
    },
];

const isInViewport = (element, topOrBottom) => {
    const rect = element.getBoundingClientRect();
    if (topOrBottom === "top") {
        return (
            rect.left >= 0 &&
            rect.top <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    } else {
        return (
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

div.addEventListener("scroll", () => {
    imagesToAnimate.forEach((object) => {
        const element = document.querySelector(`${object.img}`);
        visible = isInViewport(element, object.topOrBottom);
        if (visible === true) {
            element.classList.add("inViewPort");
        } else {
            element.classList.remove("inViewPort");
        }
    });
});
```

## Weekend

In het weekend heb ik gewerkt aan de styling van mijn eigen site 

## Dag 6

Deze maandag begon ik met de laatste dingen afvinken. Ik moest nog wat states toevoegen, toegangelijkheid verbeteren. Ook was ik bezig met het efficient inladen van de afbeelding op mijn pagina. Dit lukte niet echt. Ik probeerde iets met // Generate a unique cache-busting parameter
const cacheBuster = new Date().getTime();

// Set the low, medium, and high resolution image sources with the cache-buster parameter
imgElement.srcset = `low-res.jpg?${cacheBuster} 200w, medium-res.jpg?${cacheBuster} 500w, high-res.jpg?${cacheBuster} 1000w`;

## Dag 7

Deze dag ben ik de heletijd bezig geweest met de main feature van de team website. De bedoeling was dat als je op een naam klikte, de kleuren van die persoon op het land kwamen waar die nog naar toe wilde gaan en al geweest was. Dit was relatief makkelijk. Maar de uitdaging daarna om een gradient op de svg paths te zetten was wat moeilijker. Na wat research kwam ik op dit element:

```
  <defs>
    <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stop-color="yellow" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
  </defs>
```

link: https://www.w3schools.com/graphics/svg_grad_linear.asp

De id van de linearGradient kon je toevoegen aan het `fill:` attribuut van de path door `fill="url(#grad1)"` te zeggen. 

Daarna knaw nog een uitdaging, logica zo schrijven dat als het land al een gradient heeft, je de gradient aanpast aan de hand van de nieuwe kleuren die bij het land horen.

Dit ging niet zo goed, en koste mij veel tijd om erachter te komen wat het probleem nou was. Het werkte in theorie prima, en soms kreeg ik een extra kleur bij de gradient. Maar als ik een andere volgorde van de namen aan klikte waar Eefje de eerste was die werd aangeklikt, ging het fout. Haar kleur werd 2 keer in de gradient gegooid. Ik had aan Marten hulp gevraagd en die zei dat ik het op een andere, meer overzichtelijke manier moest doen. 

Die avond heb ik nog gekeken of ik het nog kon fixen maar toen kwam ik erachter dat het probleem al best wel hoog in de functie zat, en dus besloot ik het om het om te gooien. Namelijk om eerst door de namen te loopen, dan de matchende data van die naam te pakken. Dat land toe te voegen aan een array met die naam. And als het land al bestaat, de naam toe te voegen aan het land naast de naam/namen die er al staan. 

Daarna geef ik die array aan de functie die de gradient voor dat land aanmaakt, en de kleuren van dat land in een array stopt en doorgeeft aan een functie die de gradient maakt en het `linearGradient` element toevoegd aan `<defs></defs>`. Aan het begin is de `<defs></defs>` al geleegd. 

## Dag 8

De laaste dag heb ik de functie van gisteren nog wat korter geschreven en gedocumenteerd. Heb ik dit verslag uitgeschreven, en nog wat laaste documentatie geregeld.

<!-- Feedback:
font veranderen
Make it work
Maak er iets visueel tofs van, fade in als je scrolled, loading state, hover, empty state

Weather api met weer afbeelding links onder, en iets cools aan de andere kant van de
 -->

```
        <% data.visitedCountries.forEach(function(country){ %>
                         <%- include('user/show', {user: user}); %>

                       <li>
                            <div>
                                <div>
                                    <h2><%= country.country %></h2>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2></h2>
                                    <p></p>
                                    <ul></ul>
                                    <section></section>
                                </div>
                            </div>
                        </li>
                        <% }); %> -->
```
