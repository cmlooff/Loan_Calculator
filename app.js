// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e) {

  //* UI Variables. These are the boxes in the UI 
  const amount = document.getElementById('amount'); //// Loan Amount
  const interest = document.getElementById('interest'); //// Interest
  const years = document.getElementById('years'); //// Years to repay
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //* Takes the value associated with 'amount' and turns it into a float.
  const principle = parseFloat(amount.value)
  //* Interest value as a float.
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1) // Monthly payment

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2); // Fixed decimal
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// Show Error
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  //* Bootstrap specific for creating alerts
  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div

}