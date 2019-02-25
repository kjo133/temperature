const fahrenheitInput = document.querySelector("#fahrenheit > input");
const celciusInput = document.querySelector("#celcius > input");
const kelvinInput = document.querySelector("#kelvin > input");

function round(num) {
  return Math.round(num * 100) / 100;
}
function convertFromFahrenheit() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (5 * fTemp - 160) / 9;
  const kTemp = cTemp + 273.15;
  celciusInput.value = round(cTemp);
  kelvinInput.value = round(kTemp);
}
function convertFromCelcius() {
  const cTemp = parseFloat(celciusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = round(fTemp);
  kelvinInput.value = round(kTemp);
}
function convertFromKelvin() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = cTemp * (9 / 5) + 32;
  celciusInput.value = round(cTemp);
  fahrenheitInput.value = round(fTemp);
}

function main() {
  fahrenheitInput.addEventListener("input", convertFromFahrenheit);
  celciusInput.addEventListener("input", convertFromCelcius);
  kelvinInput.addEventListener("input", convertFromKelvin);
}

main();
