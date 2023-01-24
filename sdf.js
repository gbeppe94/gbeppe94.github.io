function calculate() {
  let gross = document.getElementById("gross").value;
  let salariesPerYear = document.getElementById("salariesPerYear").value;
  let taxRateOption = document.getElementById("taxRateOption").value;
  let net = 0;
  if (gross <= 15000) {
    net = gross - (gross * 0.23 * (taxRateOption == 1 ? 0.1 : 0.3));
  } else if (gross > 15000 && gross <= 28000) {
    net = gross - (gross * 0.25 * (taxRateOption == 1 ? 0.1 : 0.3));
  } else if (gross > 28000 && gross <= 50000) {
    net = gross - (gross * 0.34 * (taxRateOption == 1 ? 0.1 : 0.3));
  } else {
    net = gross - (gross * 0.43 * (taxRateOption == 1 ? 0.1 : 0.3));
  }
  let netPerMonth = net / salariesPerYear;
  document.getElementById("net").innerHTML = netPerMonth;
}
