
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
            resetMail();
            mailOutput.innerHTML = 'spiacente, sembra che tu non ti sia registrato';
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
    diceAnimation();
    let message = `Tu hai estratto ${humanThrow} mentre il computer ha estratto ${botThrow}. `;
    if (humanThrow > botThrow) {
        message = message + `Complimenti, hai vinto`
    } else if (humanThrow < botThrow) {
        message = message + `Peccato, hai perso `
    } else {
        message = message + `Avete pareggiato `
    }
    document.getElementById('diceResult').innerHTML = message;

    //dice animation

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
        diceList[i].animate(
            [
                // keyframes
                { backgroundColor: "red", fontSize: "1em" },
                { backgroundColor: "purple", fontSize: "1.5em" },
                { backgroundColor: "blue", fontSize: "1em" },
                { backgroundColor: "green", fontSize: "1.5em" },
                { backgroundColor: "yellow", fontSize: "1em" }

            ],
            {
                // timing options
                duration: 3000,
            },

        );
    }
}

