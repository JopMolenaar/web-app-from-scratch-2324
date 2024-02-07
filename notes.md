# Eerste lezing

-   Kilian
-   electron governance team
    framework voor bouwen browsers etc

polypane

rule of least power: kies de programmeer taal die t minst kan, maar voldoende is voor je doel
html => css => js

js meest breekbaar

-   downloaden etc

want browsers kunnen t al

in de komende jaren, als je iets bouwt wat je al eerder hebt gebouwt, kijk of er een betere manier is.

## custom toggles

form en afbeeldingen, replaced content
appearance none, ik will niet de standaard styling? Je zegt dat de browser dit element niet hoeft te vervangen ofz, agressiever dan all unset

focus-visible geldt alleen als je geen interactie hebt met de muis, verder wel.

input::thumb
input::track

## Datalist

datalist, automatic complete field
wat ik laatst heb gemaakt in hva project
<datalist> <options> </options></datalist>
Je kan m nog niet stylen

## color pickers

input type color
input {color-scheme:dark;} om de input element dark te laten stylen door de browsers

## In-page transitions

met 1 regel html vervang je honderden regels js + jquery. + betere ervaring.
maar bij scrollen op de pagina kan t ook met 2 regels js

## accessibility

animaties uitzetten voor mensen die dat willen

@media{prefers-reduced-motion:no-preference}{html{scroll-behaviour smooth}}

scroll-margin
margin voor de scroll actie

:target
styling aan iets als het element getarged wordt.

## carousels

scroll-snap api's

adam argyle snap video's

## accordions and modals

details and summary's

::marker
[open] summary:marker

je moet wel :hover => pointer en veranderende styling toeveogen want dat diet ie niet automatisch

niet automatisch dichtmaken

### dialog

blokeert js niet, alert wel

met een form method "dialog" en een knop met submit om de dialog te closen

op die diaog kan je showModal() aanroepen
dialog komt boven alles, komt in de top layer

access de value van de submit button met dialog.returnValue

::backdrop kan je stylen (achter de modal)

## container queries

werken een soort als media q, ipv hoe breed is mijn vp, hoe breed is mijn component
aan de hand van de container size kan je vertellen hoe de childs zich gedragen

container-type:

50cqw container units

## :has()

parent selector

form has input that is checked, doe dan iets
soort if else

polypane.app/where-is-has/

## stop using js in the future !!!!!! (features van browsers en css waar nog aan wordt gewerkt)

### field sizing

input element die mee schaalt met de content

### mansonry layout

gird maken, vul het maar op

## selectlist

heeft alle semantics en interactie van een select
maar is gewoon stijlbare html

goede functionaliteit en mooie eigen styling

div met slot="listbox"

:parts, [popover]

## scroll driven animations

animatie koppelen met een scroll ergens op de pagina

bram.us scroll-driven-animations-cover-flow

# Conclusie

thema, probeer geen js te gebruiken
ipv van js, laat de browser t doen
sneller etc

goeie tip: probeer zelf code te schrijven ipv de hele tijd ai, voor je baan later
