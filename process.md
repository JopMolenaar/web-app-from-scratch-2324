# Proces verslag Jop Molenaar

## Intro

## Dag 1

Begonnen met mijn website
Json content gemaakt, en al ingeladen op de webpagina. 

## Dag 2

Verder met mijn website, meer gefocust op de content en UI. 
Ook heb ik die dag de backend opgezet maar wist nog niet precies wat ik er mee moest.

## Dag 3

Deze dag heb ik de flip kaartjes werkend gekregen en als je omlaag scrollt dan beweegt de header img van japan omlaag.

## Dag 4

Deze dag ging ik verder met mijn website en vandaag viel het kwartje met template engines en backend ipv createElements met js.

Ik dacht de heleboel om te gooien maar bedacht bij mezelf dat dat meer backend is en ik dan minder vanilla js schrijf terwijl dat de opdracht is. Ook is het meer werk en wil ook genoeg andere dingen nog doen. Het is fijn dat het kwartje viel want dat betekent dat ik weer een extra inzicht heb over hoe het web kan werken.

Ook heb ik deze dag feedback gekregen en deze punten waren:

- Dat ik het font direct moest veranderen. Ik gebruikte het default font nog en had het uitgesteld.
- Prio geven aan "Make it work" en daarna mooi maken, en daarna pas snel.
- Er werd mij aangeraden om een api te gebruiken die iets met landen had. 

## Dag 5

Vandaag ging ik bezig met de scroll animaties. Ik had dit al eerder gedaan maar kon de code niet meer terug vinden. Ik was begin deze week al bezig met zoeken naar de juiste code maar kon ik niet vinden, totdat ik deze video tegen kwam:

[Incredible scroll-based animations with CSS-only](https://www.youtube.com/watch?v=UmzFk68Bwdk)

Dit kwam echt super goed uit want het gebruikt geen js, had de scroll animaties die ik nodig had, en uit kilians presentatie kwam dat we zo min mogelijk javascript moesten gebruiken.

Wel kwam ik tegen een groot probleem. Dit was namelijk dat ik een scroll snap heb gebruikt voor mijn 2 secties, als je omlaag scrollde snap je op de tweede section en omhoog op de eerste. Dit is leuk, maar kan niet op het `main` element worden gedaan. Daarom had ik een div gebruikt maar dan scroll je niet op de pagina, maar op de div, dus dan werkt `animation-timeline: view();` niet.
En aangezien ik de js code al had voor de header img was het best makkwlijk om dat dan ook te doen voor de andere images. Wel ga ik `animation-timeline: view();` gebruiken voor mijn persoonlijke blog. 

De code die ik had moest wel even omschrijven zodat het wat dynamischer werd. dus ik had dit:

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

Naar dit geschreven:

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

In het weekend heb ik gewerkt aan de styling van mijn eigen site. Dit deed ik in een rustig tempo en liep nergens echt tegen aan. 

## Dag 6

Deze maandag begon ik met de laatste dingen afvinken. Ik moest nog wat states toevoegen en toegangelijkheid verbeteren. Ook was ik bezig met het efficient inladen van de afbeelding op mijn pagina. Dit lukte niet echt. Ik probeerde iets met:
```js
/// generate a unique cache-busting parameter
const cacheBuster = new Date().getTime();

// Set the low, medium, and high resolution image sources with the cache-buster parameter
imgElement.srcset = `low-res.jpg?${cacheBuster} 200w, medium-res.jpg?${cacheBuster} 500w, high-res.jpg?${cacheBuster} 1000w`;
```

Maar dit werkte voor geen meter. Verder kwam ik er niet uit dus besloot ik het om het te laten, en later pas te proberen het sneller te maken. 

## Dag 7

Deze dag ben ik de heletijd bezig geweest met de main feature van de team website. De bedoeling was dat als je op een naam klikte, de kleuren van die persoon op het land kwamen waar die nog naar toe wilde gaan en al geweest was. Dit was relatief makkelijk. Maar de uitdaging daarna om een gradient op de svg paths te zetten was wat moeilijker. Na wat research kwam ik op dit element:

```md
  <defs>
    <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
      <stop offset="0%" stop-color="yellow" />
      <stop offset="100%" stop-color="red" />
    </linearGradient>
  </defs>
```

[www.w3schools.com/graphics/svg_grad_linear](https://www.w3schools.com/graphics/svg_grad_linear.asp)

De id van de linearGradient kon je toevoegen aan het `fill:` attribuut van de path door `fill="url(#grad1)"` te zeggen. 

Daarna knaw nog een uitdaging, logica zo schrijven dat als het land al een gradient heeft, je de gradient aanpast aan de hand van de nieuwe kleuren die bij het land horen.

Dit ging niet zo goed, en koste mij veel tijd om erachter te komen wat het probleem nou was. Het werkte in theorie prima, en soms kreeg ik een extra kleur bij de gradient. Maar als ik een andere volgorde van de namen aan klikte waar Eefje de eerste was die werd aangeklikt, ging het fout. Haar kleur werd 2 keer in de gradient gegooid. Ik had aan Marten hulp gevraagd en die zei dat ik het op een andere, meer overzichtelijke manier moest doen. 

Die avond heb ik nog gekeken of ik het nog kon fixen maar toen kwam ik erachter dat het probleem al best wel hoog in de functie zat, en dus besloot ik het om het om te gooien. Namelijk om eerst door de namen te loopen, dan de matchende data van die naam te pakken. Dat land toe te voegen aan een array met die naam. And als het land al bestaat, de naam toe te voegen aan het land naast de naam/namen die er al staan. 

Daarna geef ik die array aan de functie die de gradient voor dat land aanmaakt, en de kleuren van dat land in een array stopt en doorgeeft aan een functie die de gradient maakt en het `linearGradient` element toevoegd aan `<defs></defs>`. Aan het begin is de `<defs></defs>` al geleegd. 

## Dag 8

De laaste dag heb ik de functie van gisteren nog wat korter geschreven en gedocumenteerd. Heb ik dit verslag uitgeschreven, en nog wat laaste documentatie geregeld.

Ook opende ik mijn site op mobiel, en die was niet heel mooi. Dit moest ik ook gaan fixen met super kleine media queries. 

Ook heb ik de code door de validator gehaald en nog de laatste dingen gefixed

### Toegankelijkheids testje 

Ik kwam er vandaag wel achter dat ik niet kon tabben op mijn kaartjes, en dit moest ik wel snel fixen. Ik was een beetje bezig om een button of linkje in the cards te zetten en dan met js te zorgen dat het dan omdraaid als je erop klikt. Maar dit lukte mij niet. Toen zei Joppe uit mijn groepje opeens dat tab-index bestond, had ik al wel een keer van gehoord maar was ik allang weer vergeten. Dit voegde ik toe op de div's en met deze code hieronder zorgde ik ervoor dat je erop kon klikken met enter. 

```js
document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        flipTheCards(event.target);
    }
});
```