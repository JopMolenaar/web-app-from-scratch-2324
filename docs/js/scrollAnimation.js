/**
 * @Author:             Jop Molenaar
 * @Date created:       05-02-2024
 * @Description:        script for the scroll animations
 */

const div = document.querySelector("main > div");

let visible;

const elementsToAnimate = [
    {
        element: "main div > section:nth-child(2) img:nth-child(3)",
        topOrBottom: "bottom",
    },
    {
        element: "main > div > section:nth-child(2) img:nth-child(4)",
        topOrBottom: "top",
    },
    {
        element:
            "main > div > section:nth-child(2) div h2 span",
        topOrBottom: "bottom",
    },
    {
        element: "main > div > section:nth-child(2) section:nth-child(2) ",
        topOrBottom: "top",
    },
];

/**
 * Look if element is in the vp
 * @param {Element} element - html element to animate
 * @param {String} topOrBottom - String that says where to look if its in the vp, before playing the animation
 */
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

// When scrolling on the div, add .inViewPort if its in the vp
div.addEventListener("scroll", () => {
    elementsToAnimate.forEach((object) => {
        const element = document.querySelector(`${object.element}`);
        visible = isInViewport(element, object.topOrBottom); // look if its visible
        if (visible === true) {
            element.classList.add("inViewPort");
        } else {
            element.classList.remove("inViewPort");
        }
    });
});

// https://phuoc.ng/collection/html-dom/check-if-an-element-is-in-the-viewport/
