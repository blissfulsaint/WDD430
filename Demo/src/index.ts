let darkElement = document.getElementById("dark");
let lightElement = document.getElementById("light");
let htmlElement = document.querySelector("html");

darkElement?.addEventListener("click", () => {
    if (!htmlElement?.classList.contains("dark")) {
        htmlElement?.classList.add("dark");
    }
})

lightElement?.addEventListener("click", () => {
    if (htmlElement?.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
    }
})