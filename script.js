console.log("JS ok");
const buttonPalindroma = document.getElementById("btnpal")
const container = document.querySelector("body")



// esercizio Parola Palindroma
buttonPalindroma.addEventListener("click", function () {
    container.innerHTML = ""
    let userWord = prompt("inserisci una parola a tuo piacimento e in console vedrai se e' palindroma").trim().toLowerCase();
    let reverseWord = checkPalinndrome(userWord);

    if (userWord === reverseWord) {
        container.innerHTML = `<h4>Hai inserito una parola palindroma</h4>`
        container.append(restartBtn)
    } else {
        container.innerHTML = `<h4>La parola inserita non e' palindroma</h4>`
        container.append(restartBtn)
    }
})

//funzione
function checkPalinndrome(insertedWord) {
    let controlWord = "";
    if (insertedWord !== "") {
        for (let i = insertedWord.length - 1; i >= 0; i--) {
            controlWord += insertedWord[i]
        };
        return controlWord;
    } else {
        window.location.reload()
    }

};


//--------------------------------------------------------------------------------------------------------

// eserciozio Pari Dispari
const button = document.getElementById("btn")
const pariDispariInput = document.getElementById("paridispari").value
const numberInput = document.getElementById("number")
const restartBtn = document.createElement("button")
restartBtn.innerHTML = "Ritorna alla pagina iniziale"
restartBtn.classList.add("btn", "btn-danger", "width", "m-5")
const row = document.querySelector(".rowbox")

// funzioni
function getRandomNumber(min, max) {
    let numRandom = Math.floor(Math.random() * max) + min;
    return numRandom;
}
function pariDispariCheck(num) {
    if (num.value > 0 && num.value < 6) {
        row.innerHTML = "";
        let pcNumberGenerate = getRandomNumber(1, 5);
        let somma = num.value + pcNumberGenerate
        if (pariDispariInput === "pari" && somma % 2 === 0 || pariDispariInput === "dispari" && somma % 2 !== 0) {
            row.innerHTML = `<h1>Congratulazioni hai VINTO</h1>`
        } else {
            row.innerHTML = `<h1>Hai PERSO ritenta</h1>`
        }
    } else {
        alert("il numero inserito non e' corretto")
        window.location.reload()
    }
}

// eventi
button.addEventListener("click", function () {
    pariDispariCheck(numberInput)
    row.append(restartBtn)
});

restartBtn.addEventListener("click", function () {
    window.location.reload()
})

