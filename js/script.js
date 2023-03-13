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
        console.log('benvenuto');
    } else {
        console.log('non sei stato invitato');
    }
}




