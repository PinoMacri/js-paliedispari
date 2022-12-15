//------------- Parola Palindroma
const myInput = document.getElementById("myInput");
const form = document.getElementById("form");
const risultatoDiv = document.getElementById("results");
const button = document.getElementById("button")

button.addEventListener('click', function(event){
    event.preventDefault();
    let message = '';
    getWord = myInput.value
    if (!getWord){
        message = "Non hai scritto nulla"
    } 
    else{
        message = "Hai inserito una parola che non è palindroma, riprova!";
        if(palindromeCertified(getWord)) message = "Hai inserito una parola palindroma, bravo!";
        
    }
    risultatoDiv.innerText = message;
})
function palindromeCertified(word){
    let reversedWord = '';
    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    let flag = false;
    if(reversedWord === word){
        flag = true;
    }
    return flag;
}