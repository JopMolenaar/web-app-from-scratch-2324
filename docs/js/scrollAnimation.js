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
