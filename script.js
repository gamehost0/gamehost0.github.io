let score = 0;

const popcatImage = document.getElementById('popcat');
const scoreDisplay = document.getElementById('score');
const saveButton = document.getElementById('saveButton');
const leaderboard = document.getElementById('leaderboard');

popcatImage.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Sinun pisteet: ${score}`;
});

// Talletetaan pisteet localStorageen
saveButton.addEventListener('click', () => {
    const name = prompt("Valitse nimesi:");
    if (name) {
        let scores = JSON.parse(localStorage.getItem('popcatScores')) || [];
        scores.push({ name: name, score: score });
        scores.sort((a, b) => b.score - a.score); // Lajitellaan tulokset
        localStorage.setItem('popcatScores', JSON.stringify(scores));
        updateLeaderboard(scores);
    }
});

// Näytetään johtotaulu
function updateLeaderboard(scores) {
    leaderboard.innerHTML = ''; // Tyhjennetään lista
    scores.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.score}`;
        leaderboard.appendChild(li);
    });
}

// Lataa tulokset tallennuksesta
function loadLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('popcatScores')) || [];
    updateLeaderboard(scores);
}

// Lataa johtotaulu alussa
loadLeaderboard();

document.getElementById('captchaButton').addEventListener('click', function() {
    // Simuloidaan 50% todennäköisyydellä onnistunut vahvistus
    const isHuman = Math.random() < 0.5; // Muuta 0.5:ttä testataksesi eri todennäköisyyksiä
    
    const resultMessage = document.getElementById('resultMessage');
    if (isHuman) {
        resultMessage.textContent = "Vahvistus onnistui! Olet ihminen.";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Vahvistus epäonnistui. Olet alien.";
        resultMessage.style.color = "red";
    }
    resultMessage.classList.remove('hidden');
});
