console.log("Cześć!");
let  zlotyElement = document.querySelector(".js-zloty");
let  currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let zloty = zlotyElement.value;
  let currency = currencyElement.value;

  let result = zloty / currency;

  resultElement.innerText = result.toFixed(2);

console.log(result);
});