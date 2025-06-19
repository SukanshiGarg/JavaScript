const smallCursor = document.querySelector(".smallCursor");
const shadowCursor = document.querySelector(".shadowCursor");

document.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;

    smallCursor.style.left = `${x}px`;
    smallCursor.style.top = `${y}px`;

    shadowCursor.style.left = `${x}px`;
    shadowCursor.style.top = `${y}px`;
});
