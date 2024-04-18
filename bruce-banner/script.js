// ID des images et span
const brucebannerID = document.getElementById("bruce-banner");
const brucebannerImg = document.getElementById("bruce-bannerImg");

const hulkID = document.getElementById("hulk");
const hulkImg = document.getElementById("hulkImg");

const thaddeusrossID = document.getElementById("thaddeus-ross");
const thaddeusrossImg = document.getElementById("thaddeus-rossImg");

const bettyrossID = document.getElementById("betty-ross");
const bettyrossImg = document.getElementById("betty-rossImg");

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
    brucebannerID.addEventListener("click", () => printImg(brucebannerImg));
    hulkID.addEventListener("click", () => printImg(hulkImg));
    thaddeusrossID.addEventListener("click", () => printImg(thaddeusrossImg));
    bettyrossID.addEventListener("click", () => printImg(bettyrossImg));
}