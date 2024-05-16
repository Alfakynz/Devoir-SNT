// ID des images et span
const thorID = document.getElementById("thor");
const thorImg = document.getElementById("thorImg");

const odinID = document.getElementById("odin");
const odinImg = document.getElementById("odinImg");

const asgardID = document.getElementById("asgard");
const asgardImg = document.getElementById("asgardImg");

const avengersID = document.getElementById("avengers");
const avengersImg = document.getElementById("avengersImg");

const ultronID = document.getElementById("ultron");
const ultronImg = document.getElementById("ultronImg");

const thanosID = document.getElementById("thanos");
const thanosImg = document.getElementById("thanosImg");

const helaID = document.getElementById("hela");
const helaImg = document.getElementById("helaImg");

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
    thorID.addEventListener("click", () => printImg(thorImg));
    odinID.addEventListener("click", () => printImg(odinImg));
    asgardID.addEventListener("click", () => printImg(asgardImg));
    avengersID.addEventListener("click", () => printImg(avengersImg));
    ultronID.addEventListener("click", () => printImg(ultronImg));
    thanosID.addEventListener("click", () => printImg(thanosImg));
    helaID.addEventListener("click", () => printImg(helaImg));
}