// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// creo una lista di mail che possono accedere
const allowedEmails = [
    "kaylahrussel@konopelski.com",
    "pdach@gmail.com",
    "mkoelpin@bernier.com",
    "ivy.sipes@hotmail.com",
    "jhickle@yahoo.com",
    "mann.mallory@grimes.com",
    "morissette.milan@reilly.com",
    "hmarquardt@yahoo.com",
    "sierra.schimmel@johns.com",
    "karelle.runolfsdottir@stokes.com"
]

// creo una const per prendere il bottone
const btn = document.getElementById('submitEmail');

// collego il bottone ad un evento click e ad una funzione di checklist
btn.addEventListener('click', checkList);

// creo la funzione per determinare se l'email inserita dall'utente è nella lista di quelle che possono accedere oppure no

function checkList(e) {
    e.preventDefault();
    let validEmail = '';
    const search = document.getElementById('userEmail').value;
    for (let i = 0; i < allowedEmails.length; i++) {
        if (allowedEmails[i] === search) {
            validEmail = allowedEmails[i];
        }
    }

    if (validEmail) {
        const form = document.querySelector('form');
        form.classList.add('d-none');
        const container = document.querySelector('.container');
        let rdmNumber = Math.floor(Math.random() * 2000) + 1000;
        container.innerHTML = `<h2 class= "card bg-gold">Complimenti, confermiamo il suo invito alla serata degli Oscar!
        Ecco il tuo biglietto:</h2>
        <div class="ticket">
        <div class="ticket-content-wrapper">
        <h1 class="text-center mt-5">TICKET</h1>
        <div class="text-center mt-5 d-flex justify-content-center border border-top-3 border-dark">
            <h1>SN${rdmNumber}</h1>
        </div>
        </div>
        `
        
        console.log('benvenuto');

    } else {
        const container = document.querySelector('.container');
        container.innerHTML = `<h2 class= "card bg-gold">Ci dispiace, lei non è nella lista degli invitati.</h2>`
        console.log('non sei stato invitato');
    }
}










