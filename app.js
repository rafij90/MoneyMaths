const form = document.querySelector('#sip-form');

if (form) {
  const monthlyInput = document.querySelector('#monthly-investment');
  const rateInput = document.querySelector('#return-rate');
  const yearsInput = document.querySelector('#time-period');
  const totalValue = document.querySelector('#total-value');
  const investedValue = document.querySelector('#invested-value');
  const returnsValue = document.querySelector('#returns-value');
  const formatCurrency = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const monthly = Number(monthlyInput.value) || 0;
    const annualRate = (Number(rateInput.value) || 0) / 100;
    const years = Number(yearsInput.value) || 0;
    const months = years * 12;
    const monthlyRate = annualRate / 12;
    const invested = monthly * months;
    const futureValue = monthlyRate === 0
      ? invested
      : monthly * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);

    totalValue.value = formatCurrency(futureValue);
    totalValue.textContent = formatCurrency(futureValue);
    investedValue.textContent = formatCurrency(invested);
    returnsValue.textContent = formatCurrency(Math.max(0, futureValue - invested));
  });
}