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

  e.preventDefault();
}