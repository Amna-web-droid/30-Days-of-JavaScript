
// 1. ARROW FUNCTION (Celsius to Fahrenheit)
const convertToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

function runTempConverter() {
  const celsiusVal = document.getElementById("celsius-input").value;

  if (celsiusVal === "") {
    alert("Please enter a temperature!");
    return;
  }

  const fahrenheit = convertToFahrenheit(Number(celsiusVal));
  document.getElementById("temp-result").innerText = `${celsiusVal}°C = ${fahrenheit.toFixed(1)}°F`;
}


// 2. DEFAULT PARAMETERS & RETURN STATEMENT

function calculateDiscount(price, discountPercent = 10) {
  const discountAmount = (price * discountPercent) / 100;
  const finalPrice = price - discountAmount;
  return finalPrice; // Returned calculated value
}

function runDiscountCalc() {
  const priceVal = document.getElementById("price-input").value;
  const discountVal = document.getElementById("discount-input").value;

  if (priceVal === "") {
    alert("Please enter a price!");
    return;
  }

  const finalPrice = discountVal !== ""
    ? calculateDiscount(Number(priceVal), Number(discountVal))
    : calculateDiscount(Number(priceVal));

  document.getElementById("discount-result").innerText = `$${finalPrice.toFixed(2)}`;
}


// 3. FUNCTION EXPRESSION & LOGIC CHECK
const inspectNumber = function (num) {
  const isEven = num % 2 === 0 ? "Even" : "Odd";
  const isPositive = num >= 0 ? "Positive" : "Negative";
  return `${num} is ${isEven} & ${isPositive}`;
};

function runInspector() {
  const numVal = document.getElementById("num-input").value;

  if (numVal === "") {
    alert("Please enter a number!");
    return;
  }

  const resultString = inspectNumber(Number(numVal));
  document.getElementById("inspector-result").innerText = resultString;
}