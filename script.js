const button = document.querySelector("#fact-button");
const fact = document.querySelector("#fun-fact");
const senseButton = document.querySelector("#sense-button");
const senseOutput = document.querySelector("#sense-output");
let senseTimer;

button.addEventListener('click', function() {
    fact.hidden = !fact.hidden;
    fact.classList.toggle('is-visible', !fact.hidden);
});

function runSenseScan() {
    const message = "web fluid: OK / status: web-slinging";
    let characterIndex = 0;

    clearInterval(senseTimer);
    senseOutput.textContent = "";
    senseTimer = setInterval(function() {
        senseOutput.textContent += message[characterIndex];
        characterIndex += 1;

        if (characterIndex === message.length) {
            clearInterval(senseTimer);
        }
    }, 35);
}

senseButton.addEventListener('click', runSenseScan);
runSenseScan();