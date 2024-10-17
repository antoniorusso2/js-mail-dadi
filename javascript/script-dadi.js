
// 2. Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const nUser = parseInt(Math.random() * 6); //integer number [parseInt] from 1 to 6
const nCPU = parseInt(Math.random() * 6); //integer number [parseInt] from 1 to 6
alert('clicca per tirare un dado e scoprire il vincitore')

console.log(`Il tuo numero: ${nUser}`)
console.log(`Il numero del tuo avversario: ${nCPU}`)

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (nUser > nCPU) {
  console.log('Complimenti! Hai vinto!');
}
else if (nUser < nCPU){
  console.log('Ritenta! Sarai piu\' fortunato');
}
else{
  console.log('Incredibile! E\' un pareggio!');
}

// alert('Ricarica la pagina se vuoi giocare di nuovo!')

