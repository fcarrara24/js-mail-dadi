/*
<div class="container">
        <div id="mail-wrapper">
            <label for="mail">inserire la mail da vedere nella lista</label>
            <input type="email" name="mail" id="mail">
            <button id="mailCheck">controlla</button>
            <div id="mailOutput">a</div>
            <div id="mailError" class="text-danger">b</div>
        </div>
        <div id="dice-wrapper">
            <label for="dice">premere "lancia il dado per generare il dado</label>
            <button name="dice" id="dice">Lancia</button>
            <div class="dice-output-wrapper">
                <div class="diceOutput">asd</div>
                <div class="diceOutput">asd</div>
            </div>
        </div>
    </div>

*/

//database
const mailList = [
    "nome.cognome@gmail.com",
    "lorem.ipsum@gmail.com",
    "tizio.caio@gmail.com"
]

const mailCheck = document.getElementById('mailCheck');
//output
const mailError = document.getElementById('mailError');

mailCheck.addEventListener('click', function () {
    const email = document.getElementById('mail').value;
    if (email === "") {
        resetMail();
        mailError.innerHTML = " inserire un valore da valutare";

    } else if (!(email.includes("@gmail.com"))) {
        resetMail();
        mailError.innerHTML = "inserire una mail in formato valido @gmail.com";
    } else {
        //declaring it once so it doest recalculate each time
        const listLength = mailList.length;
        //checker
        let found = false;
        for (let i = 0; i < listLength; i++) {
            if (mailList[i] === email) {
                found = true;
            }
        }
        if (found) {
            resetMail();
            document.getElementById('mailOutput').innerHTML = 'la mail appartiene alla lista';
        } else {
            resetMail();
            document.getElementById('mailOutput').innerHTML = 'spiacente, sembra che tu non ti sia registrato';
        }

    }
});

function resetMail() {
    document.getElementById('mailOutput').innerHTML = "";
    document.getElementById('mailError').innerHTML = "";

    document.getElementById('mail').value = "";

    return;
}