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

## Dag 6

## Dag 7

## Dag 8

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
