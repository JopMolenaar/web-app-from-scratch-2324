/**
 * @Author:             Jop Molenaar
 * @Date created:       05-02-2024
 * @Description:        script for the scroll animations
 */

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

// https://phuoc.ng/collection/html-dom/check-if-an-element-is-in-the-viewport/
