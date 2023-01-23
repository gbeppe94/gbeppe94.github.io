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
            tax = tax * 0.7;
        } else {
            tax = tax * 0.9;
        }
        var netSalary = (income - tax)/months;
        document.getElementById("netSalary").innerHTML = netSalary.toFixed(2);
    }
</script>
