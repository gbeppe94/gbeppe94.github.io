<!DOCTYPE html>
<html>
<head>
  <title>Tax Calculator for "Rientro dei cervelli" in Italy
  </title>
  <style>
    /* CSS styles go here */
    h1 {
      text-align: center;
    }
    form {
      margin: 0 auto;
      width: 250px;
      text-align: center;
    }
    label {
      width: 100px;
      display: inline-block;
    }
    #netSalary {
      font-weight: bold;
    }
    #months {
      font-weight: bold;
    }
    body {
        background-color: lightblue;
    }
  </style>
</head>
<body>
  <h1>Tax Calculator for "Rientro dei cervelli" in Italy</h1>
  <form onsubmit="calculateTax(); return false;">
    <label for="income">Gross Salary:</label>
    <input type="text" id="income" name="income" onkeyup="if(event.keyCode === 13){calculateTax()}">
    <br>
    <label for="months">Months per year:</label>
    <select id="months" name="months">
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
    </select>
    <br><br>
    <label for="region">Region:</label>
    <select id="region" name="region">
        <option value="Abruzzo">Abruzzo</option>
        <option value="Molise">Molise</option>
        <option value="Campania">Campania</option>
        <option value="Puglia">Puglia</option>
        <option value="Basilicata">Basilicata</option>
        <option value="Calabria">Calabria</option>
        <option value="Sardegna">Sardegna</option>
        <option value="Sicilia">Sicilia</option>
        <option value="other">Other</option>
    </select>
    <br><br>
    <button type="button" onclick="calculateTax()">Calculate Tax</button>
  </form>
  <br>
  <p>Net Salary: €<span id="netSalary"></span></p>
  <script>
    // JavaScript functions go here
    function calculateTax() {
        var income = document.getElementById("income").value;
        var months = document.getElementById("months").value;
        var region = document.getElementById("region").value;
        var taxrate;
        var tax;
        if (income <= 15000) {
          taxrate = 23;
          tax = income * (taxrate / 100);
        } else if (income <= 28000) {
          taxrate = 25;
          tax = (15000 * 0.23) + (income - 15000) * (taxrate / 100);
        } else if (income <= 50000) {
          taxrate = 35;
          tax = (15000 * 0.23) + (13000 * 0.25) + (income - 28000) * (taxrate / 100);
        } else {
          taxrate = 43;
          tax = (15000 * 0.23) + (13000 * 0.25) + (22000 * 0.35) + (income - 50000) * (taxrate / 100);
        }
        if (region === "Abruzzo" || region === "Molise" || region === "Campania" || region === "Puglia" || region === "Basilicata" || region === "Calabria" || region === "Sardegna" || region === "Sicilia") {
            tax = tax * 0.9;
        } else {
            tax = tax * 0.7;
        }
        var netSalary = (income - tax)/months;
        document.getElementById("netSalary").innerHTML = netSalary.toFixed(2);
    }
  </script>
</body>
</html>
