document.getElementById('raffleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    // Voit tässä laittaa koodia, joka lähettää tiedot palvelimelle tai muuta logiikkaa
    messageElement.textContent = `Kiitos ${name} liittymisestä arvontaan!`;

    // Tyhjennä lomake
    document.getElementById('raffleForm').reset();
});
