// 1. Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
const userEmail = prompt('Inserisci qui la tua mail') //string || null
const allowAccess = ['prova1@mail.com', 'prova2@mail.com', 'prova3@mail.com', 'prova4@mail.com']

// if (allowAccess.includes(userEmail)) {
//   console.log('accesso garantito');
// }
// else{
//   console.log('accesso negato');
// }

// console.log(userEmail)


//!SOLUZIONE 2
//ciclo for
// console.log(Boolean(accessCheck))
let accessCheck ;

for (i = 0; i < allowAccess.length; i++){
  accessCheck = allowAccess.includes(userEmail); //boolean
  console.log(accessCheck);
}

if(accessCheck === true){
  console.log('Accesso garantito');
}
else{
  alert('Accesso Negato')
}