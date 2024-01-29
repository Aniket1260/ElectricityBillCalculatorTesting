function calculateBill() {
    const unitsInput = document.getElementById('units');
    const resultDiv = document.getElementById('result');
  
    const units = parseInt(unitsInput.value);
    
    
  
    let totalAmount = 0;
  
    if (units <= 150) {
      totalAmount = Math.max(units * 4.50, 200);
    } else if (units <= 200) {
      totalAmount = 150 * 4.50 + (units - 150) * 5.00;
    } else if (units <= 250) {
      totalAmount = 150 * 4.50 + 50 * 5.00 + (units - 200) * 5.50;
    } else if (units <= 300) {
      totalAmount = 150 * 4.50 + 50 * 5.00 + 50 * 5.50 + (units - 250) * 6.50;
    } else {
      totalAmount = 150 * 4.50 + 50 * 5.00 + 50 * 5.50 + 50 * 6.50 + (units - 300) * 6.50;
    }
  
  
    resultDiv.innerHTML = `
      <p>Total Bill Amount: Rs. ${totalAmount.toFixed(2)}</p>
`;
  }