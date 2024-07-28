// Hae elementit
const popdogImg = document.getElementById("popdog-img");
const scoreDisplay = document.getElementById("score");

// Lisää klikkaustapahtuma kuvaan
popdogImg.addEventListener("click", () => {
    score++; // Lisää pisteitä klikkauksesta
    scoreDisplay.textContent = "Pisteet: {_score++}" + score; // Päivitä pistemäärä
    alert("PoPDoG ei näytä tällä hetkellä pisteitä pisteet kohdassa. Voit ottaa tämän viestin pois käytöstä, klikkaamalla Älä anna tämän sivuston näyttää tätä uudelleen")
});
