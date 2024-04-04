// ID des images et span
const jarvisID = document.getElementById("jarvis");
const jarvisImg = document.getElementById("jarvisImg");

const ironmanID = document.getElementById("iron-man");
const ironmanImg = document.getElementById("iron-manImg");

const tonystarkID = document.getElementById("tony-stark");
const tonystarkImg = document.getElementById("tony-starkImg");

const mandarinID = document.getElementById("mandarin");
const mandarinImg = document.getElementById("mandarinImg");

const thanosID = document.getElementById("thanos");
const thanosImg = document.getElementById("thanosImg");

const avengersID = document.getElementById("avengers");
const avengersImg = document.getElementById("avengersImg");

const starkindustriesID = document.getElementById("stark-industries");
const starkindustriesImg = document.getElementById("stark-industriesImg");

const opacityPage = document.getElementById("opacityPage");

// Fonction pour ouvrir l'image
const printImg = (img) => {
    img.classList.add("img-hover");
    opacityPage.classList.add("show");

    // Fonction pour fermer l'image
    const rmvHoverClass = () => {
        img.classList.remove("img-hover");
        opacityPage.classList.remove("show");
        img.removeEventListener("click", rmvHoverClass);
        opacityPage.removeEventListener("click", rmvHoverClass);
    };

    img.addEventListener("click", rmvHoverClass);
    opacityPage.addEventListener("click", rmvHoverClass);
};

// Appliquer la fonction printImg aux spans
if (document.getElementById("div-imgs")) {
    jarvisID.addEventListener("click", () => printImg(jarvisImg));
    ironmanID.addEventListener("click", () => printImg(ironmanImg));
    tonystarkID.addEventListener("click", () => printImg(tonystarkImg));
    mandarinID.addEventListener("click", () => printImg(mandarinImg));
    thanosID.addEventListener("click", () => printImg(thanosImg));
    avengersID.addEventListener("click", () => printImg(avengersImg));
    starkindustriesID.addEventListener("click", () => printImg(starkindustriesImg));
}

// Fonction pour détecter les touches pressées
function redirectPages(event) {
    // Détection des touches pressées
    var altPressed = event.altKey;
    var aPressed = event.key === "a";
    var bPressed = event.key === "b";
    var iPressed = event.key === "i";
    var sPressed = event.key === "s";

    // Rediriger en fonction de la lettre
    if (altPressed && aPressed) {
        window.location.href = "index.html";
    }
    if (altPressed && bPressed) {
        window.location.href = "biographie.html";
    }
    if (altPressed && iPressed) {
        window.location.href = "informations.html";
    }
    if (altPressed && sPressed) {
        window.location.href = "sources.html";
    }
}

document.addEventListener("keydown", redirectPages);