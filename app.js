// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  //* Hide results
  document.getElementById('results').style.display = 'none';

  //* Show loading
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults() {

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

    //* Show results
    document.getElementById('results').style.display = 'block';

    //* Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
  }

}

// Show Error
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //* Bootstrap specific for creating alerts
  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading -> Above 'Loan Calculator'
  card.insertBefore(errorDiv, heading);

  // Clear error after x seconds
  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector('.alert').remove();
}