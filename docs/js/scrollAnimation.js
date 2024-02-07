window.addEventListener("scroll", function () {
    console.log("ewojnfejwnjfk");
    const element = document.querySelector(
        "main div > section:nth-child(2) img:nth-child(5)"
    );
    let scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    let viewportHeight = window.innerHeight;

    // Calculate the distance between the top of the element and the bottom of the viewport
    let elementOffsetTop = element.offsetTop;
    let distanceFromViewport =
        elementOffsetTop - scrollPosition - viewportHeight;

    // Check if the element is within the viewport when scrolling
    console.log(distanceFromViewport);
    if (distanceFromViewport < 0) {
        // element.style.display = "block";
        console.log("in");
    } else {
        console.log("out");
        // element.style.display = "none";
    }
});
