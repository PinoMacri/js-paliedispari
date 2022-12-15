/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
const input15 = document.getElementById('input15');
const pariDispari = document.querySelector('input[name="pariDispari"]:checked');
const form = document.getElementById ("form")
const finalResult = document.getElementById('finalResult');
const risultatoNumeri = document.getElementById('risultatoNumeri');
form.addEventListener('submit', function(event){
    event.preventDefault();
    let message = ''
    const valuePariDispari = document.querySelector('input[name="pariDispari"]:checked').value;
    let numeroUtente = parseInt(input15.value);
    let sum = 0;
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5){
        message = 'numeri accettati solo tra 1 e 5'
    }
    else if (!pariDispari){
        message = 'pari o dispari?';
    }
    else {
        cpuNumber = numeriRandom(1, 5);
        sum = numeroUtente + cpuNumber;
        message = 'mi dispiace ma hai perso, riprova!'
        if ((isEven(sum) && valuePariDispari === 'pari') || (!isEven(sum) && valuePariDispari === 'dispari')){
            message = 'complimenti, hai vinto!';
        } 
    }
    risultatoNumeri.innerText = `Io ho scelto ${numeroUtente}, mentre tu ${cpuNumber} quindi la somma è ${sum}`;
    finalResult.innerText = message;
});
function numeriRandom (min, max){
    const randomNumber = Math.floor(Math.random() * max - min + 1) + min;
    return randomNumber;
}
function isEven(number){
    const isEven = !(number % 2) ? true : false;
    return isEven;
}