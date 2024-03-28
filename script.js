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

const divImgs = document.getElementById("div-imgs");

/* -------------------------------------------------- */
const printImg = (img) => {
    img.classList.add("img-hover");

    const rmvHoverClass = () => {
        img.classList.remove("img-hover");
        divImgs.removeEventListener("click", rmvHoverClass);
    };

    divImgs.addEventListener("click", rmvHoverClass);
};

/* -------------------------------------------------- */
jarvisID.addEventListener("click", () => printImg(jarvisImg));
ironmanID.addEventListener("click", () => printImg(ironmanImg));
tonystarkID.addEventListener("click", () => printImg(tonystarkImg));
mandarinID.addEventListener("click", () => printImg(mandarinImg));
thanosID.addEventListener("click", () => printImg(thanosImg));
avengersID.addEventListener("click", () => printImg(avengersImg));
starkindustriesID.addEventListener("click", () => printImg(starkindustriesImg));
