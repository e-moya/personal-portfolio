const button = document.querySelector("#fact-button");
const fact = document.querySelector("#fun-fact");

button.addEventListner('click', function() {
    fact.hidden = !fact.hidden;
});