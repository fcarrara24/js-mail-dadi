
//database
const mailList = [
    "nome.cognome@gmail.com",
    "lorem.ipsum@gmail.com",
    "tizio.caio@gmail.com"
]




const mailWrapper = document.getElementById('mailWrapper');
const mailCheck = document.getElementById('mailCheck');
//output
const mailError = document.getElementById('mailError');
const mailOutput = document.getElementById('mailOutput');
const diceList = document.getElementsByClassName('diceRoll');

let msg


mailCheck.addEventListener('click', function () {

    const email = document.getElementById('mail').value;
    if (email === "") {
        resetMail();
        mailError.innerHTML = " inserire un valore da valutare";
        animateError();

    } else if (!(email.includes("@gmail.com"))) {
        resetMail();
        mailError.innerHTML = "inserire una mail in formato valido @gmail.com";
        animateError();
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
            mailOutput.innerHTML = 'la mail appartiene alla lista';
        } else {
            //store outside the cose
            msg = document.getElementById('mail').value;
            resetMail();

            mailOutput.innerHTML = `<span class="pe-2">spiacente, sembra che tu non ti sia registrato</span> 
            <button id="add" class="btn btn-primary" onclick="aggiungi()">Aggiungimi</button>`

        }

    }
});

function resetMail() {
    mailOutput.innerHTML = "";
    mailError.innerHTML = "";

    document.getElementById('mail').value = "";

    return;
}

roll = document.getElementById('dice');

roll.addEventListener('click', function () {
    let humanThrow = rndInt(1, 6);
    let botThrow = rndInt(1, 6);
    let content;
    diceAnimation();
    setTimeout(function () {
        diceList[0].innerHTML = humanThrow;
        diceList[1].innerHTML = botThrow;

        if (humanThrow > botThrow) {
            content = `Grande, hai vinto`;
        } else if (humanThrow < botThrow) {
            content = `Peccato, hai perso `;
        } else {
            content = `Avete pareggiato`;
        }
        console.log
        document.getElementById('diceResult').innerHTML = content;
    }, 3000);



});

function rndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function animateError() {
    //animation
    document.getElementById("MailWrapper").animate(
        [
            // keyframes
            { transform: "translatex(0px)" },
            { transform: "translatex(-15px)" },
            { transform: "translatex(15px)" },
            { transform: "translatex(0px)" },
        ],
        {
            // timing options
            duration: 250,
        },
    );
}

function diceAnimation() {
    for (let i = 0; i < 2; i++) {
        diceList[i].innerHTML = '?';
        diceList[i].animate(
            [
                // keyframes
                { fontSize: "1em", },
                { fontSize: "2em" },
                { fontSize: "1em" },
                { fontSize: "2em" },
                { backgroundColor: "white", fontSize: "1em", color: "white" }

            ],
            {
                // timing options
                duration: 3000,
            },

        );

    };


}

function aggiungi() {
    mailList.push(msg);
    resetMail();
    mailOutput.innerHTML = "hai aggiunto la mail alla lista con successo"
}