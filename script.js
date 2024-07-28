let score = 0;

const popdogImg = document.getElementById("popdog-img");
const scoreDisplay = document.getElementById("score");

popdogImg.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = "Pisteet: " + score;
    // Täällä voit lisätä animaatioita kuvalle, kuten ääntä tai muita efektejä
});
