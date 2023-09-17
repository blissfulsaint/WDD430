var darkElement = document.getElementById("dark");
var lightElement = document.getElementById("light");
var htmlElement = document.querySelector("html");
darkElement === null || darkElement === void 0 ? void 0 : darkElement.addEventListener("click", function () {
    if (!(htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.classList.contains("dark"))) {
        htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.classList.add("dark");
    }
});
lightElement === null || lightElement === void 0 ? void 0 : lightElement.addEventListener("click", function () {
    if (htmlElement === null || htmlElement === void 0 ? void 0 : htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
    }
});
