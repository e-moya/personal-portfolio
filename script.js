const button = document.querySelector("#fact-button");
const fact = document.querySelector("#fun-fact");

button.addEventListener('click', function() {
    fact.hidden = !fact.hidden;
    fact.classList.toggle('is-visible', !fact.hidden);
});