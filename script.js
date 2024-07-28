let score = 0;

// Hae elementit
const popdogImg = document.getElementById("popdog-img");
const scoreDisplay = document.getElementById("score");

// Lisää klikkaustapahtuma kuvaan
popdogImg.addEventListener("click", () => {
    score++; // Lisää pisteitä klikkauksesta
    scoreDisplay.textContent = "Pisteet: " + score; // Päivitä pistemäärä
});
});
