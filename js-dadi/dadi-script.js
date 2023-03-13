// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const btnPlay = document.getElementById('randomNumber');
btnPlay.addEventListener('click', play);

function play() {
    // Genero numero casuale tra 1 e 6 per il computer ed il giocatore
    var computerScore = Math.floor(Math.random() * 6) + 1;
    var playerScore = Math.floor(Math.random() * 6) + 1;

    // Determina il vincitore in base al punteggio più alto
    var winner = '';

    if (playerScore > computerScore) {
        winner = 'Hai vinto!'
    } else if ( computerScore > playerScore) {
        winner = 'Vince il computer!'
    } else {
        winner = 'Pareggio!'
    }

    // Inserisco e mostro nell'HTML il risultato della partita

    document.getElementById("risultato").innerHTML = "Tu hai fatto " + playerScore + " e il computer ha fatto " + computerScore + ". " + winner;

    
}