function calculateBill() {
    // Get input value
    const unitsInput = document.getElementById('units');
    const units = parseFloat(unitsInput.value);

    // Validate input
    if (isNaN(units) || units < 0) {
        alert('Please enter a valid number of units.');
        unitsInput.value = '';
        return;
    }

    // Calculate bill
    let rate;
    let minimumAmount;

    if (units <= 150) {
        rate = 4.5;
        minimumAmount = 200;
    } else if (units <= 200) {
        rate = 5;
        minimumAmount = 200;
    } else if (units <= 250) {
        rate = 5.5;
        minimumAmount = 200;
    } else if (units <= 300) {
        rate = 6.5;
        minimumAmount = 200;
    } else {
        rate = 6.5;
        minimumAmount = 200;
    }

    const billAmount = Math.max(units * rate, minimumAmount);

    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your electricity bill is Rs. ${billAmount.toFixed(2)}`;
}
