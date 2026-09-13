const PERSONAL = [
  ['sip', 'SIP Calculator', 'Savings & investment', 'Calculate the future value of regular monthly investments.'],
  ['lump-sum', 'Lump Sum Investment Calculator', 'Savings & investment', 'Calculate the future value of a one-time investment.'],
  ['sip-lump-sum', 'SIP + Lump Sum Calculator', 'Savings & investment', 'Combine a starting investment with regular contributions.'],
  ['step-up-sip', 'Step-Up SIP Calculator', 'Savings & investment', 'Calculate an SIP that increases every year.'],
  ['swp', 'SWP Calculator', 'Savings & investment', 'Calculate withdrawals and the remaining investment corpus.'],
  ['stp', 'STP Calculator', 'Savings & investment', 'Calculate transfers from one fund to another.'],
  ['goal-based-investment', 'Goal-Based Investment Calculator', 'Savings & investment', 'Find the monthly investment required for a target.'],
  ['recurring-deposit', 'Recurring Deposit Calculator', 'Savings & investment', 'Calculate recurring deposit maturity value.'],
  ['ppf', 'PPF Calculator', 'Savings & investment', 'Calculate PPF maturity using annual contributions.'],
  ['nps', 'NPS Calculator', 'Savings & investment', 'Project an NPS corpus and estimated annuity.'],
  ['fd', 'FD Calculator', 'Savings & investment', 'Calculate fixed deposit maturity with quarterly compounding.'],
  ['bond-yield', 'Bond / Yield Calculator', 'Savings & investment', 'Calculate current yield from coupon and price.'],
  ['inflation', 'Inflation Calculator', 'Savings & investment', 'Calculate the future cost of an amount after inflation.'],
  ['real-return', 'Real Return Calculator', 'Savings & investment', 'Calculate return after adjusting for inflation.'],
  ['cagr', 'CAGR Calculator', 'Savings & investment', 'Calculate compound annual growth rate.'],
  ['emi', 'EMI Calculator', 'Loans & debt', 'Calculate monthly payment, total payment, and interest.'],
  ['loan-amortization', 'Loan Amortization Calculator', 'Loans & debt', 'Calculate the loan balance after a number of payments.'],
  ['home-loan', 'Home Loan Calculator', 'Loans & debt', 'Calculate home loan EMI and interest.'],
  ['car-loan', 'Car Loan Calculator', 'Loans & debt', 'Calculate car loan EMI and interest.'],
  ['personal-loan', 'Personal Loan Calculator', 'Loans & debt', 'Calculate personal loan EMI and interest.'],
  ['loan-prepayment', 'Loan Prepayment Calculator', 'Loans & debt', 'Calculate interest saved through a prepayment.'],
  ['loan-balance', 'Loan Balance Calculator', 'Loans & debt', 'Calculate outstanding balance after payments.'],
  ['debt-to-income', 'Debt-to-Income Ratio Calculator', 'Loans & debt', 'Calculate monthly debt obligations as a share of income.'],
  ['credit-card-interest', 'Credit Card Interest Calculator', 'Loans & debt', 'Calculate balance growth and interest on a card balance.'],
  ['retirement', 'Retirement Calculator', 'Personal planning', 'Calculate the corpus needed for retirement.'],
  ['fire', 'FIRE Calculator', 'Personal planning', 'Calculate the portfolio needed for financial independence.'],
  ['emergency-fund', 'Emergency Fund Calculator', 'Personal planning', 'Calculate a cash reserve target.'],
  ['net-worth', 'Net Worth Calculator', 'Personal planning', 'Calculate assets minus liabilities.'],
  ['savings-rate', 'Savings Rate Calculator', 'Personal planning', 'Calculate savings as a percentage of income.'],
  ['monthly-budget', 'Monthly Budget Calculator', 'Personal planning', 'Calculate money left after essential spending.'],
  ['financial-independence', 'Financial Independence Calculator', 'Personal planning', 'Calculate the portfolio needed to cover spending.'],
  ['education-cost', 'Education Cost Calculator', 'Personal planning', 'Calculate future education cost after inflation.'],
  ['future-value', 'Future Value Calculator', 'Personal planning', 'Calculate a future value from present value and growth.'],
  ['present-value', 'Present Value Calculator', 'Personal planning', 'Calculate today’s value of a future amount.'],
  ['time-value-of-money', 'Time Value of Money Calculator', 'Personal planning', 'Calculate future value and present value over time.']
];
const BUSINESS_NAMES = ['Break-Even', 'Contribution Margin', 'Gross Margin', 'Operating Margin', 'Net Profit Margin', 'Markup vs Margin', 'Unit Economics', 'Customer Acquisition Cost (CAC)', 'Customer Lifetime Value (LTV)', 'LTV/CAC', 'Burn Rate', 'Runway', 'Working Capital', 'Net Working Capital', 'Operating Cycle', 'Cash Conversion Cycle', 'Inventory Days', 'Receivable Days', 'Payable Days', 'Working Capital Requirement', 'EBIT', 'EBITDA', 'EBITDA Margin', 'EBIT vs EBITDA', 'Operating Leverage', 'Financial Leverage', 'Degree of Operating Leverage (DOL)', 'Degree of Financial Leverage (DFL)', 'Degree of Total Leverage (DTL)', 'Product Pricing', 'Cost-Plus Pricing', 'Target Profit Pricing', 'Discount', 'GST Inclusive/Exclusive Price', 'Selling Price', 'Contribution-Based Pricing'];
const BUSINESS = BUSINESS_NAMES.map((name) => [name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''), `${name} Calculator`, 'Business finance', `Calculate ${name.toLowerCase()} from your business inputs.`]);
const INVESTMENT_NAMES = ['Absolute Return', 'XIRR', 'Annualized Return', 'Holding Period Return', 'Realized vs Unrealized Return', 'Dividend Return', 'Total Shareholder Return (TSR)', 'Portfolio Return', 'Portfolio Weighted Average', 'Portfolio Allocation', 'Portfolio Rebalancing', 'Expected Portfolio Return', 'Portfolio Risk', 'Sharpe Ratio', 'Sortino Ratio', 'Treynor Ratio', "Jensen's Alpha", 'Beta', 'Correlation', 'Covariance', 'Portfolio Beta', 'P/E Ratio', 'Forward P/E', 'PEG Ratio', 'P/B Ratio', 'P/S Ratio', 'EV/EBITDA', 'EV/EBIT', 'EV/Sales', 'Dividend Yield', 'Dividend Payout Ratio', 'Retention Ratio', 'ROE', 'ROA', 'ROIC', 'Earnings Yield'];
const slugify = (name) => name.toLowerCase().replace(/[']/g, '').replace(/p\/e/g, 'pe').replace(/p\/b/g, 'pb').replace(/p\/s/g, 'ps').replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
const INVESTMENT = INVESTMENT_NAMES.map((name) => [slugify(name), `${name} Calculator`, 'Investment & markets', `Calculate ${name.toLowerCase()} from your investment inputs.`]);
const TOOLS = [...PERSONAL, ...BUSINESS, ...INVESTMENT];
const money = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`;
const number = (value) => Number(value.toFixed(2)).toLocaleString('en-IN');
const pct = (value) => `${number(value)}%`;
const input = (id, label, unit, value, step = '1', type = 'number', min = '0') => ({ id, label, unit, value, step, type, min });
const result = (value, primary, secondary, primaryLabel, secondaryLabel, valueType = 'money', primaryType = valueType, secondaryType = valueType) => ({ value, primary, secondary, primaryLabel, secondaryLabel, valueType, primaryType, secondaryType });

function fieldsFor(id) {
  if (id === 'sip') return [input('monthly', 'Monthly investment', '₹', 5000, '500'), input('rate', 'Annual return', '%', 12, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'lump-sum') return [input('principal', 'Initial investment', '₹', 100000, '1000'), input('rate', 'Annual return', '%', 12, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'sip-lump-sum') return [input('principal', 'Initial investment', '₹', 100000, '1000'), input('monthly', 'Monthly investment', '₹', 5000, '500'), input('rate', 'Annual return', '%', 12, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'step-up-sip') return [input('monthly', 'Starting monthly investment', '₹', 5000, '500'), input('step', 'Annual increase', '%', 10, '0.1'), input('rate', 'Annual return', '%', 12, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'swp') return [input('principal', 'Starting corpus', '₹', 1000000, '10000'), input('withdrawal', 'Monthly withdrawal', '₹', 10000, '500'), input('rate', 'Annual return', '%', 8, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'stp') return [input('principal', 'Amount to transfer', '₹', 500000, '10000'), input('monthly', 'Monthly transfer', '₹', 25000, '1000'), input('rate', 'Annual return', '%', 10, '0.1'), input('years', 'Period', 'years', 2)];
  if (id === 'goal-based-investment') return [input('goal', 'Target amount', '₹', 2500000, '10000'), input('rate', 'Annual return', '%', 12, '0.1'), input('years', 'Years to goal', 'years', 10)];
  if (['recurring-deposit', 'fd', 'ppf', 'nps'].includes(id)) return [input('principal', id === 'fd' ? 'Deposit amount' : 'Starting balance', '₹', 100000, '1000'), input('monthly', id === 'recurring-deposit' ? 'Monthly contribution' : 'Annual contribution', '₹', id === 'fd' ? 0 : id === 'recurring-deposit' ? 5000 : 60000, '1000'), input('rate', 'Annual interest / return', '%', id === 'ppf' ? 7.1 : 8, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'bond-yield') return [input('coupon', 'Annual coupon', '₹', 8000, '100'), input('price', 'Current price', '₹', 95000, '1000')];
  if (['inflation', 'education-cost'].includes(id)) return [input('amount', 'Amount today', '₹', 100000, '1000'), input('inflation', 'Inflation rate', '%', 6, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'real-return') return [input('returnRate', 'Investment return', '%', 12, '0.1'), input('inflation', 'Inflation rate', '%', 6, '0.1')];
  if (id === 'cagr') return [input('start', 'Starting value', '₹', 100000, '1000'), input('end', 'Ending value', '₹', 250000, '1000'), input('years', 'Period', 'years', 10)];
  if (['emi', 'home-loan', 'car-loan', 'personal-loan'].includes(id)) return [input('principal', 'Loan amount', '₹', 1000000, '10000'), input('rate', 'Annual interest rate', '%', 8.5, '0.1'), input('years', 'Loan term', 'years', 10)];
  if (id === 'loan-amortization') return [input('principal', 'Loan amount', '₹', 1000000, '10000'), input('rate', 'Annual interest rate', '%', 8.5, '0.1'), input('years', 'Loan term', 'years', 10), input('paidMonths', 'Payments made', 'months', 24)];
  if (id === 'loan-prepayment') return [input('principal', 'Outstanding balance', '₹', 800000, '10000'), input('rate', 'Annual interest rate', '%', 8.5, '0.1'), input('years', 'Remaining term', 'years', 8), input('prepayment', 'Prepayment amount', '₹', 100000, '1000')];
  if (id === 'loan-balance') return [input('principal', 'Original loan', '₹', 1000000, '10000'), input('rate', 'Annual interest rate', '%', 8.5, '0.1'), input('years', 'Loan term', 'years', 10), input('paidMonths', 'Payments made', 'months', 24)];
  if (id === 'debt-to-income') return [input('income', 'Gross monthly income', '₹', 80000, '1000'), input('debt', 'Monthly debt payments', '₹', 20000, '1000')];
  if (id === 'credit-card-interest') return [input('balance', 'Current balance', '₹', 50000, '1000'), input('rate', 'Annual interest rate', '%', 36, '0.1'), input('payment', 'Monthly payment', '₹', 5000, '100')];
  if (['retirement', 'fire', 'financial-independence'].includes(id)) return [input('monthlySpend', 'Monthly retirement spending', '₹', 60000, '1000'), input('inflation', 'Inflation rate', '%', 6, '0.1'), input('returnRate', 'Expected return', '%', 12, '0.1'), input('withdrawalRate', 'Safe withdrawal rate', '%', 4, '0.1'), input('years', 'Years to retirement', 'years', 20)];
  if (id === 'emergency-fund') return [input('monthlySpend', 'Monthly essential spending', '₹', 40000, '1000'), input('months', 'Months of cover', 'months', 6)];
  if (id === 'net-worth') return [input('assets', 'Total assets', '₹', 1500000, '10000'), input('liabilities', 'Total liabilities', '₹', 400000, '10000')];
  if (id === 'savings-rate') return [input('income', 'Monthly income', '₹', 80000, '1000'), input('savings', 'Monthly savings', '₹', 20000, '1000')];
  if (id === 'monthly-budget') return [input('income', 'Monthly income', '₹', 80000, '1000'), input('needs', 'Essential spending', '₹', 40000, '1000'), input('wants', 'Lifestyle spending', '₹', 15000, '1000'), input('debt', 'Debt payments', '₹', 10000, '1000')];
  if (id === 'future-value') return [input('principal', 'Present value', '₹', 100000, '1000'), input('rate', 'Annual return', '%', 10, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'present-value') return [input('future', 'Future value', '₹', 250000, '1000'), input('rate', 'Discount rate', '%', 10, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'time-value-of-money') return [input('principal', 'Present value', '₹', 100000, '1000'), input('rate', 'Annual rate', '%', 10, '0.1'), input('years', 'Period', 'years', 10)];
  if (id === 'break-even') return [input('fixedCosts', 'Fixed costs', '₹', 200000, '1000'), input('sellingPrice', 'Selling price per unit', '₹', 500, '10'), input('variableCost', 'Variable cost per unit', '₹', 300, '10')];
  if (['contribution-margin', 'gross-margin'].includes(id)) return [input('revenue', 'Revenue / sales', '₹', 500000, '1000'), input(id === 'contribution-margin' ? 'variableCosts' : 'cogs', id === 'contribution-margin' ? 'Variable costs' : 'Cost of goods sold', '₹', 300000, '1000')];
  if (['operating-margin', 'net-profit-margin', 'ebit'].includes(id)) return [input('revenue', 'Revenue / sales', '₹', 500000, '1000'), input('costs', 'Operating / total costs', '₹', 300000, '1000')];
  if (id === 'markup-vs-margin') return [input('cost', 'Cost price', '₹', 300, '10'), input('price', 'Selling price', '₹', 500, '10')];
  if (id === 'unit-economics') return [input('price', 'Revenue per unit', '₹', 1000, '10'), input('variableCost', 'Variable cost per unit', '₹', 400, '10'), input('fixedCosts', 'Fixed costs', '₹', 200000, '1000'), input('volume', 'Units sold', 'units', 1000)];
  if (id === 'customer-acquisition-cost-cac') return [input('marketingSpend', 'Sales and marketing spend', '₹', 100000, '1000'), input('newCustomers', 'New customers acquired', 'customers', 100)];
  if (id === 'customer-lifetime-value-ltv') return [input('avgRevenue', 'Average revenue per period', '₹', 2000, '10'), input('grossMargin', 'Gross margin', '%', 60, '0.1'), input('churn', 'Monthly churn rate', '%', 5, '0.1')];
  if (id === 'ltv-cac') return [input('ltv', 'Customer lifetime value', '₹', 24000, '100'), input('cac', 'Customer acquisition cost', '₹', 6000, '100')];
  if (id === 'burn-rate') return [input('cashStart', 'Starting cash balance', '₹', 1000000, '1000'), input('cashEnd', 'Ending cash balance', '₹', 850000, '1000'), input('months', 'Period', 'months', 3)];
  if (id === 'runway') return [input('cash', 'Cash available', '₹', 1000000, '1000'), input('monthlyBurn', 'Monthly burn rate', '₹', 150000, '1000')];
  if (['working-capital', 'net-working-capital', 'working-capital-requirement'].includes(id)) return [input('currentAssets', 'Current assets', '₹', 600000, '1000'), input('currentLiabilities', 'Current liabilities', '₹', 350000, '1000')];
  if (id === 'operating-cycle') return [input('inventoryDays', 'Inventory days', 'days', 45), input('receivableDays', 'Receivable days', 'days', 30)];
  if (id === 'cash-conversion-cycle') return [input('inventoryDays', 'Inventory days', 'days', 45), input('receivableDays', 'Receivable days', 'days', 30), input('payableDays', 'Payable days', 'days', 25)];
  if (id === 'inventory-days') return [input('avgInventory', 'Average inventory', '₹', 150000, '1000'), input('cogs', 'Cost of goods sold', '₹', 900000, '1000')];
  if (id === 'receivable-days') return [input('avgReceivables', 'Average receivables', '₹', 120000, '1000'), input('revenue', 'Revenue', '₹', 1200000, '1000')];
  if (id === 'payable-days') return [input('avgPayables', 'Average payables', '₹', 90000, '1000'), input('cogs', 'Cost of goods sold', '₹', 900000, '1000')];
  if (id === 'ebitda') return [input('ebit', 'EBIT', '₹', 150000, '1000'), input('depreciation', 'Depreciation and amortisation', '₹', 50000, '1000')];
  if (id === 'ebitda-margin') return [input('ebitda', 'EBITDA', '₹', 200000, '1000'), input('revenue', 'Revenue', '₹', 1000000, '1000')];
  if (id === 'ebit-vs-ebitda') return [input('ebit', 'EBIT', '₹', 150000, '1000'), input('depreciation', 'Depreciation and amortisation', '₹', 50000, '1000')];
  if (id === 'operating-leverage') return [input('contribution', 'Contribution margin', '₹', 300000, '1000'), input('ebit', 'EBIT', '₹', 150000, '1000')];
  if (id === 'financial-leverage') return [input('ebit', 'EBIT', '₹', 150000, '1000'), input('interest', 'Interest expense', '₹', 30000, '1000')];
  if (['degree-of-operating-leverage-dol', 'degree-of-financial-leverage-dfl', 'degree-of-total-leverage-dtl'].includes(id)) return [input('contribution', 'Contribution margin', '₹', 300000, '1000'), input('ebit', 'EBIT', '₹', 150000, '1000'), input('interest', 'Interest expense', '₹', 30000, '1000')];
  if (id === 'product-pricing') return [input('cost', 'Unit cost', '₹', 300, '10'), input('margin', 'Target margin', '%', 30, '0.1')];
  if (id === 'cost-plus-pricing') return [input('cost', 'Unit cost', '₹', 300, '10'), input('markup', 'Markup', '%', 25, '0.1')];
  if (id === 'target-profit-pricing') return [input('cost', 'Unit cost', '₹', 300, '10'), input('targetProfit', 'Target profit', '₹', 100000, '1000'), input('volume', 'Units to sell', 'units', 1000)];
  if (id === 'discount') return [input('price', 'Original price', '₹', 1000, '10'), input('discountRate', 'Discount', '%', 10, '0.1')];
  if (id === 'gst-inclusive-exclusive-price') return [input('price', 'Base price', '₹', 1000, '10'), input('gst', 'GST rate', '%', 18, '0.1')];
  if (id === 'selling-price') return [input('cost', 'Total cost', '₹', 300000, '1000'), input('margin', 'Target margin', '%', 20, '0.1')];
  if (id === 'contribution-based-pricing') return [input('fixedCosts', 'Fixed costs', '₹', 200000, '1000'), input('targetProfit', 'Target profit', '₹', 100000, '1000'), input('volume', 'Units to sell', 'units', 1000), input('variableCost', 'Variable cost per unit', '₹', 300, '10')];
  if (id === 'xirr') return [input('investment', 'Initial investment', '₹', 100000, '1000'), input('date0', 'Investment date', '', '2026-01-01', '1', 'date'), input('cashFlow1', 'Cash flow 1', '₹', 0, '1000', 'number', '-1000000000'), input('date1', 'Cash flow 1 date', '', '2027-01-01', '1', 'date'), input('cashFlow2', 'Cash flow 2', '₹', 0, '1000', 'number', '-1000000000'), input('date2', 'Cash flow 2 date', '', '2028-01-01', '1', 'date'), input('cashFlow3', 'Final cash flow', '₹', 150000, '1000', 'number', '-1000000000'), input('date3', 'Final cash flow date', '', '2029-01-01', '1', 'date')];
  if (['absolute-return', 'annualized-return', 'holding-period-return'].includes(id)) return [input('start', 'Starting value', '₹', 100000, '1000'), input('end', 'Ending value', '₹', 150000, '1000'), input('years', 'Holding period', 'years', 3, '0.1')];
  if (id === 'realized-vs-unrealized-return') return [input('invested', 'Amount invested', '₹', 100000, '1000'), input('realized', 'Realized value', '₹', 25000, '1000'), input('current', 'Current unrealized value', '₹', 140000, '1000')];
  if (id === 'dividend-return') return [input('investment', 'Investment value', '₹', 100000, '1000'), input('dividend', 'Dividend received', '₹', 5000, '100')];
  if (id === 'total-shareholder-return-tsr') return [input('startPrice', 'Starting share price', '₹', 100, '1'), input('endPrice', 'Ending share price', '₹', 120, '1'), input('dividend', 'Dividend per share', '₹', 5, '0.1')];
  if (id === 'portfolio-return') return [input('initial', 'Initial portfolio value', '₹', 500000, '1000'), input('final', 'Final portfolio value', '₹', 575000, '1000'), input('income', 'Dividends / income', '₹', 10000, '100')];
  if (['portfolio-weighted-average', 'expected-portfolio-return'].includes(id)) return [input('weightOne', 'Asset 1 allocation', '%', 60, '0.1'), input('returnOne', 'Asset 1 return', '%', 12, '0.1'), input('weightTwo', 'Asset 2 allocation', '%', 40, '0.1'), input('returnTwo', 'Asset 2 return', '%', 6, '0.1')];
  if (['portfolio-allocation', 'portfolio-rebalancing'].includes(id)) return [input('portfolioValue', 'Portfolio value', '₹', 1000000, '1000'), input('currentWeight', 'Current allocation', '%', 70, '0.1'), input('targetWeight', 'Target allocation', '%', 60, '0.1')];
  if (id === 'portfolio-risk') return [input('portfolioReturn', 'Portfolio return', '%', 12, '0.1'), input('riskFree', 'Risk-free rate', '%', 6, '0.1'), input('volatility', 'Portfolio volatility', '%', 15, '0.1')];
  if (['sharpe-ratio', 'sortino-ratio'].includes(id)) return [input('portfolioReturn', 'Portfolio return', '%', 12, '0.1'), input('riskFree', 'Risk-free rate', '%', 6, '0.1'), input('risk', id === 'sharpe-ratio' ? 'Standard deviation' : 'Downside deviation', '%', 15, '0.1')];
  if (id === 'treynor-ratio') return [input('portfolioReturn', 'Portfolio return', '%', 12, '0.1'), input('riskFree', 'Risk-free rate', '%', 6, '0.1'), input('beta', 'Beta', 'x', 1.1, '0.01')];
  if (id === 'jensens-alpha') return [input('portfolioReturn', 'Portfolio return', '%', 14, '0.1'), input('riskFree', 'Risk-free rate', '%', 6, '0.1'), input('marketReturn', 'Market return', '%', 11, '0.1'), input('beta', 'Beta', 'x', 1.1, '0.01')];
  if (id === 'beta') return [input('covariance', 'Covariance with market', 'x', 0.02, '0.001'), input('marketVariance', 'Market variance', 'x', 0.015, '0.001')];
  if (id === 'correlation') return [input('covariance', 'Covariance', 'x', 0.02, '0.001'), input('assetDeviation', 'Asset standard deviation', '%', 18, '0.1'), input('marketDeviation', 'Market standard deviation', '%', 15, '0.1')];
  if (id === 'covariance') return [input('correlation', 'Correlation', 'x', 0.7, '0.01'), input('assetDeviation', 'Asset standard deviation', '%', 18, '0.1'), input('marketDeviation', 'Market standard deviation', '%', 15, '0.1')];
  if (id === 'portfolio-beta') return [input('weightOne', 'Asset 1 allocation', '%', 60, '0.1'), input('betaOne', 'Asset 1 beta', 'x', 1.2, '0.01'), input('weightTwo', 'Asset 2 allocation', '%', 40, '0.1'), input('betaTwo', 'Asset 2 beta', 'x', 0.8, '0.01')];
  if (['pe-ratio', 'forward-pe', 'pb-ratio', 'ps-ratio', 'ev-ebitda', 'ev-ebit', 'ev-sales'].includes(id)) return [input('value', id.startsWith('ev-') ? 'Enterprise value' : 'Share price / equity value', '₹', 1000000, '1000'), input('metric', id === 'pe-ratio' || id === 'forward-pe' ? 'Earnings' : id === 'pb-ratio' ? 'Book value' : id === 'ps-ratio' || id === 'ev-sales' ? 'Sales' : id === 'ev-ebitda' ? 'EBITDA' : 'EBIT', '₹', 100000, '1000')];
  if (id === 'peg-ratio') return [input('pe', 'P/E ratio', 'x', 20, '0.1'), input('growth', 'Earnings growth', '%', 15, '0.1')];
  if (id === 'dividend-yield') return [input('dividend', 'Dividend per share', '₹', 5, '0.1'), input('price', 'Share price', '₹', 100, '1')];
  if (id === 'dividend-payout-ratio') return [input('dividend', 'Dividend per share', '₹', 5, '0.1'), input('eps', 'Earnings per share', '₹', 10, '0.1')];
  if (id === 'retention-ratio') return [input('eps', 'Earnings per share', '₹', 10, '0.1'), input('dividend', 'Dividend per share', '₹', 3, '0.1')];
  if (id === 'roe') return [input('netIncome', 'Net income', '₹', 150000, '1000'), input('equity', 'Shareholders equity', '₹', 1000000, '1000')];
  if (id === 'roa') return [input('netIncome', 'Net income', '₹', 150000, '1000'), input('assets', 'Average assets', '₹', 2000000, '1000')];
  if (id === 'roic') return [input('nopat', 'NOPAT', '₹', 120000, '1000'), input('investedCapital', 'Invested capital', '₹', 1000000, '1000')];
  if (id === 'earnings-yield') return [input('eps', 'Earnings per share', '₹', 10, '0.1'), input('price', 'Share price', '₹', 100, '1')];
  return [input('revenue', 'Revenue / sales', '₹', 500000, '1000'), input('costs', 'Costs / expenses', '₹', 300000, '1000'), input('volume', 'Units / customers', 'units', 100)];
}

function annuity(monthly, annualRate, years) { const months = years * 12; const rate = annualRate / 12; return rate === 0 ? monthly * months : monthly * (((1 + rate) ** months - 1) / rate) * (1 + rate); }
function emi(principal, annualRate, years) { const months = years * 12; const rate = annualRate / 12; return rate === 0 ? principal / months : principal * rate * (1 + rate) ** months / ((1 + rate) ** months - 1); }
function xirr(cashFlows, dates) {
  const firstDate = dates[0].getTime();
  let rate = 0.1;
  for (let iteration = 0; iteration < 100; iteration += 1) {
    let value = 0;
    let derivative = 0;
    cashFlows.forEach((cashFlow, index) => {
      const years = (dates[index].getTime() - firstDate) / 86400000 / 365;
      const factor = (1 + rate) ** years;
      value += cashFlow / factor;
      derivative -= years * cashFlow / ((1 + rate) ** (years + 1));
    });
    if (Math.abs(value) < 0.000001) return rate * 100;
    if (derivative === 0) break;
    const nextRate = rate - value / derivative;
    if (!Number.isFinite(nextRate) || nextRate <= -0.999999) break;
    if (Math.abs(nextRate - rate) < 0.0000001) return nextRate * 100;
    rate = nextRate;
  }
  return rate * 100;
}

function calculate(id, v) {
  const rate = (v.rate || 0) / 100;
  if (id === 'sip') { const invested = v.monthly * v.years * 12; const total = annuity(v.monthly, rate, v.years); return result(total, invested, total - invested, 'Total invested', 'Estimated returns'); }
  if (id === 'lump-sum') { const total = v.principal * (1 + rate) ** v.years; return result(total, v.principal, total - v.principal, 'Initial investment', 'Estimated returns'); }
  if (id === 'sip-lump-sum') { const invested = v.principal + v.monthly * v.years * 12; const total = v.principal * (1 + rate) ** v.years + annuity(v.monthly, rate, v.years); return result(total, invested, total - invested, 'Total invested', 'Estimated returns'); }
  if (id === 'step-up-sip') { let total = 0; let invested = 0; for (let year = 0; year < v.years; year += 1) { const monthly = v.monthly * (1 + v.step / 100) ** year; total += annuity(monthly, rate, 1) * (1 + rate) ** (v.years - year - 1); invested += monthly * 12; } return result(total, invested, total - invested, 'Total invested', 'Estimated returns'); }
  if (id === 'swp') { const r = rate / 12; const months = v.years * 12; let corpus = v.principal; let withdrawn = 0; for (let month = 0; month < months && corpus > 0; month += 1) { corpus *= 1 + r; const payment = Math.min(v.withdrawal, corpus); corpus -= payment; withdrawn += payment; } return result(corpus, withdrawn, corpus, 'Total withdrawn', 'Remaining corpus'); }
  if (id === 'stp') { const months = v.years * 12; const monthlyRate = rate / 12; let source = v.principal; let total = 0; let transferred = 0; for (let month = 0; month < months && source > 0; month += 1) { const transfer = Math.min(v.monthly, source); source -= transfer; transferred += transfer; total = total * (1 + monthlyRate) + transfer; } return result(total, transferred, total - transferred, 'Total transferred', 'Estimated growth'); }
  if (id === 'goal-based-investment') { const monthly = v.rate === 0 ? v.goal / (v.years * 12) : v.goal * (rate / 12) / ((1 + rate / 12) ** (v.years * 12) - 1) / (1 + rate / 12); return result(monthly, monthly * v.years * 12, v.goal, 'Total invested', 'Goal amount'); }
  if (id === 'recurring-deposit') { const total = annuity(v.monthly, rate, v.years); return result(total, v.monthly * v.years * 12, total - v.monthly * v.years * 12, 'Total deposited', 'Interest earned'); }
  if (id === 'ppf') { const total = v.principal * (1 + rate) ** v.years + annuity(v.monthly / 12, rate, v.years); return result(total, v.principal + v.monthly * v.years, total - v.principal - v.monthly * v.years, 'Total contribution', 'Interest earned'); }
  if (id === 'nps') { const total = annuity(v.monthly / 12, rate, v.years) + v.principal * (1 + rate) ** v.years; return result(total, v.principal + v.monthly * v.years, total * 0.4, 'Total contribution', 'Estimated annuity value'); }
  if (id === 'fd') { const total = v.principal * (1 + rate / 4) ** (4 * v.years); return result(total, v.principal, total - v.principal, 'Deposit', 'Interest earned'); }
  if (id === 'bond-yield') return result(v.coupon / v.price * 100, v.coupon, v.price, 'Annual coupon', 'Bond price', 'percent', 'money', 'money');
  if (['inflation', 'education-cost'].includes(id)) { const total = v.amount * (1 + v.inflation / 100) ** v.years; return result(total, v.amount, total - v.amount, 'Amount today', 'Increase from inflation'); }
  if (id === 'real-return') return result(((1 + v.returnRate / 100) / (1 + v.inflation / 100) - 1) * 100, v.returnRate, v.inflation, 'Nominal return', 'Inflation', 'percent', 'percent', 'percent');
  if (id === 'cagr') return result(((v.end / v.start) ** (1 / v.years) - 1) * 100, v.start, v.end, 'Starting value', 'Ending value', 'percent', 'money', 'money');
  if (['emi', 'home-loan', 'car-loan', 'personal-loan'].includes(id)) { const payment = emi(v.principal, rate, v.years); return result(payment, payment * v.years * 12, payment * v.years * 12 - v.principal, 'Total repayment', 'Total interest'); }
  if (['loan-amortization', 'loan-balance'].includes(id)) { const payment = emi(v.principal, rate, v.years); const r = rate / 12; const n = v.paidMonths; const balance = r === 0 ? v.principal - payment * n : v.principal * (1 + r) ** n - payment * (((1 + r) ** n - 1) / r); return result(Math.max(0, balance), payment, v.principal - Math.max(0, balance), 'Monthly EMI', 'Principal repaid'); }
  if (id === 'loan-prepayment') { const payment = emi(v.principal, rate, v.years); const oldInterest = payment * v.years * 12 - v.principal; const balance = Math.max(0, v.principal - v.prepayment); const newPayment = emi(balance, rate, v.years); return result(oldInterest - (newPayment * v.years * 12 - balance), oldInterest, newPayment, 'Interest saved', 'New EMI'); }
  if (id === 'debt-to-income') return result(v.debt / v.income * 100, v.debt, v.income, 'Monthly debt', 'Monthly income', 'percent', 'money', 'money');
  if (id === 'credit-card-interest') { const monthlyRate = rate / 12; const months = v.payment > v.balance * monthlyRate ? Math.ceil(-Math.log(1 - v.balance * monthlyRate / v.payment) / Math.log(1 + monthlyRate)) : Infinity; const total = Number.isFinite(months) ? v.payment * months : v.balance * (1 + monthlyRate) ** 12; return result(total, v.balance, total - v.balance, 'Starting balance', 'Interest paid'); }
  if (['retirement', 'fire', 'financial-independence'].includes(id)) { const annualSpend = v.monthlySpend * 12 * (1 + v.inflation / 100) ** v.years; const corpus = v.withdrawalRate > 0 ? annualSpend / (v.withdrawalRate / 100) : 0; return result(corpus, annualSpend, v.monthlySpend * 12, 'Target corpus', 'Current annual spend', 'money', 'money', 'money'); }
  if (id === 'emergency-fund') return result(v.monthlySpend * v.months, v.monthlySpend, v.months, 'Monthly spending', 'Months of cover');
  if (id === 'net-worth') return result(v.assets - v.liabilities, v.assets, v.liabilities, 'Assets', 'Liabilities');
  if (id === 'savings-rate') return result(v.savings / v.income * 100, v.savings, v.income, 'Monthly savings', 'Monthly income', 'percent', 'money', 'money');
  if (id === 'monthly-budget') return result(v.income - v.needs - v.wants - v.debt, v.income, v.needs + v.wants + v.debt, 'Monthly income', 'Monthly outgo', 'money');
  if (id === 'future-value' || id === 'time-value-of-money') { const total = v.principal * (1 + rate) ** v.years; return result(total, v.principal, total - v.principal, 'Present value', 'Growth'); }
  if (id === 'present-value') { const total = v.future / (1 + rate) ** v.years; return result(total, v.future, v.future - total, 'Future value', 'Discount'); }
  if (id === 'break-even') return result(v.fixedCosts / (v.sellingPrice - v.variableCost), v.fixedCosts, v.sellingPrice - v.variableCost, 'Fixed costs', 'Contribution per unit', 'number');
  if (id === 'contribution-margin') return result((v.revenue - v.variableCosts) / v.revenue * 100, v.revenue - v.variableCosts, v.revenue, 'Contribution', 'Revenue', 'percent', 'money', 'money');
  if (id === 'gross-margin') return result((v.revenue - v.cogs) / v.revenue * 100, v.revenue - v.cogs, v.revenue, 'Gross profit', 'Revenue', 'percent', 'money', 'money');
  if (id === 'operating-margin' || id === 'net-profit-margin') return result((v.revenue - v.costs) / v.revenue * 100, v.revenue - v.costs, v.revenue, id === 'operating-margin' ? 'Operating profit' : 'Net profit', 'Revenue', 'percent', 'money', 'money');
  if (id === 'ebit') return result(v.revenue - v.costs, v.revenue, v.costs, 'Revenue', 'Operating costs');
  if (id === 'markup-vs-margin') return result((v.price - v.cost) / v.cost * 100, (v.price - v.cost) / v.price * 100, v.price - v.cost, 'Markup', 'Margin', 'percent', 'percent', 'money');
  if (id === 'unit-economics') return result(v.price - v.variableCost, (v.price - v.variableCost) / v.price * 100, v.fixedCosts, 'Contribution margin', 'Fixed costs', 'money', 'percent', 'money');
  if (id === 'customer-acquisition-cost-cac') return result(v.marketingSpend / v.newCustomers, v.marketingSpend, v.newCustomers, 'Marketing spend', 'New customers');
  if (id === 'customer-lifetime-value-ltv') return result(v.avgRevenue * (v.grossMargin / 100) / (v.churn / 100), v.avgRevenue, v.grossMargin, 'Revenue per period', 'Gross margin');
  if (id === 'ltv-cac') return result(v.ltv / v.cac, v.ltv, v.cac, 'Lifetime value', 'Acquisition cost', 'number');
  if (id === 'burn-rate') return result((v.cashStart - v.cashEnd) / v.months, v.cashStart, v.cashEnd, 'Starting cash', 'Ending cash');
  if (id === 'runway') return result(v.cash / v.monthlyBurn, v.cash, v.monthlyBurn, 'Cash available', 'Monthly burn', 'number');
  if (['working-capital', 'net-working-capital', 'working-capital-requirement'].includes(id)) return result(v.currentAssets - v.currentLiabilities, v.currentAssets, v.currentLiabilities, 'Current assets', 'Current liabilities');
  if (id === 'operating-cycle') return result(v.inventoryDays + v.receivableDays, v.inventoryDays, v.receivableDays, 'Inventory days', 'Receivable days', 'number');
  if (id === 'cash-conversion-cycle') return result(v.inventoryDays + v.receivableDays - v.payableDays, v.inventoryDays + v.receivableDays, v.payableDays, 'Operating cycle', 'Payable days', 'number');
  if (id === 'inventory-days') return result(v.avgInventory / v.cogs * 365, v.avgInventory, v.cogs, 'Average inventory', 'Cost of goods sold', 'number');
  if (id === 'receivable-days') return result(v.avgReceivables / v.revenue * 365, v.avgReceivables, v.revenue, 'Average receivables', 'Revenue', 'number');
  if (id === 'payable-days') return result(v.avgPayables / v.cogs * 365, v.avgPayables, v.cogs, 'Average payables', 'Cost of goods sold', 'number');
  if (id === 'ebitda') return result(v.ebit + v.depreciation, v.ebit, v.depreciation, 'EBIT', 'Depreciation and amortisation');
  if (id === 'ebitda-margin') return result(v.ebitda / v.revenue * 100, v.ebitda, v.revenue, 'EBITDA', 'Revenue', 'percent', 'money', 'money');
  if (id === 'ebit-vs-ebitda') return result(v.ebit + v.depreciation, v.ebit, v.depreciation, 'EBIT', 'Depreciation and amortisation');
  if (id === 'operating-leverage' || id === 'degree-of-operating-leverage-dol') return result(v.contribution / v.ebit, v.contribution, v.ebit, 'Contribution margin', 'EBIT', 'number');
  if (id === 'financial-leverage' || id === 'degree-of-financial-leverage-dfl') return result(v.ebit / (v.ebit - v.interest), v.ebit, v.interest, 'EBIT', 'Interest expense', 'number');
  if (id === 'degree-of-total-leverage-dtl') return result(v.contribution / (v.ebit - v.interest), v.contribution, v.ebit - v.interest, 'Contribution margin', 'EBT', 'number');
  if (id === 'product-pricing' || id === 'selling-price') return result(v.cost / (1 - v.margin / 100), v.cost, v.margin, 'Cost', 'Target margin');
  if (id === 'cost-plus-pricing') return result(v.cost * (1 + v.markup / 100), v.cost, v.markup, 'Cost', 'Markup');
  if (id === 'target-profit-pricing') return result(v.cost + v.targetProfit / v.volume, v.cost, v.targetProfit, 'Cost per unit', 'Target profit');
  if (id === 'discount') return result(v.price * (1 - v.discountRate / 100), v.price, v.discountRate, 'Original price', 'Discount');
  if (id === 'gst-inclusive-exclusive-price') return result(v.price * (1 + v.gst / 100), v.price, v.gst, 'Base price', 'GST');
  if (id === 'contribution-based-pricing') return result(v.variableCost + (v.fixedCosts + v.targetProfit) / v.volume, v.variableCost, v.targetProfit, 'Variable cost', 'Target profit');
  if (id === 'absolute-return') return result((v.end - v.start) / v.start * 100, v.start, v.end - v.start, 'Starting value', 'Gain / loss', 'percent', 'money', 'money');
  if (id === 'xirr') { const cashFlows = [-v.investment, v.cashFlow1, v.cashFlow2, v.cashFlow3]; const dates = [v.date0, v.date1, v.date2, v.date3]; return result(xirr(cashFlows, dates), v.investment, cashFlows.slice(1).reduce((total, cashFlow) => total + cashFlow, 0), 'Initial investment', 'Total received', 'percent', 'money', 'money'); }
  if (id === 'annualized-return') return result(((v.end / v.start) ** (1 / v.years) - 1) * 100, v.start, v.end - v.start, 'Starting value', 'Gain / loss', 'percent', 'money', 'money');
  if (id === 'holding-period-return') return result((v.end - v.start) / v.start * 100, v.start, v.years, 'Starting value', 'Holding period', 'percent', 'money', 'number');
  if (id === 'realized-vs-unrealized-return') return result((v.realized + v.current - v.invested) / v.invested * 100, v.realized, v.current, 'Realized value', 'Unrealized value', 'percent', 'money', 'money');
  if (id === 'dividend-return') return result(v.dividend / v.investment * 100, v.dividend, v.investment, 'Dividend received', 'Investment value', 'percent', 'money', 'money');
  if (id === 'total-shareholder-return-tsr') return result((v.endPrice - v.startPrice + v.dividend) / v.startPrice * 100, v.endPrice - v.startPrice, v.dividend, 'Price return', 'Dividend return', 'percent', 'money', 'money');
  if (id === 'portfolio-return') return result((v.final - v.initial + v.income) / v.initial * 100, v.initial, v.income, 'Initial value', 'Income received', 'percent', 'money', 'money');
  if (['portfolio-weighted-average', 'expected-portfolio-return'].includes(id)) return result((v.weightOne * v.returnOne + v.weightTwo * v.returnTwo) / 100, v.weightOne, v.weightTwo, 'Asset 1 allocation', 'Asset 2 allocation', 'percent');
  if (['portfolio-allocation', 'portfolio-rebalancing'].includes(id)) return result(v.portfolioValue * (v.targetWeight - v.currentWeight) / 100, v.currentWeight, v.targetWeight, 'Current allocation', 'Target allocation');
  if (id === 'portfolio-risk') return result((v.volatility / 100) ** 2 * 100, v.portfolioReturn, v.riskFree, 'Portfolio return', 'Risk-free rate', 'percent', 'percent', 'percent');
  if (['sharpe-ratio', 'sortino-ratio'].includes(id)) return result((v.portfolioReturn - v.riskFree) / v.risk, v.portfolioReturn, v.riskFree, 'Portfolio return', 'Risk-free rate', 'number');
  if (id === 'treynor-ratio') return result((v.portfolioReturn - v.riskFree) / v.beta, v.portfolioReturn, v.riskFree, 'Portfolio return', 'Risk-free rate', 'percent', 'percent', 'percent');
  if (id === 'jensens-alpha') return result(v.portfolioReturn - (v.riskFree + v.beta * (v.marketReturn - v.riskFree)), v.portfolioReturn, v.marketReturn, 'Portfolio return', 'Market return', 'percent', 'percent', 'percent');
  if (id === 'beta') return result(v.covariance / v.marketVariance, v.covariance, v.marketVariance, 'Covariance', 'Market variance', 'number');
  if (id === 'correlation') return result(v.covariance / ((v.assetDeviation / 100) * (v.marketDeviation / 100)), v.covariance, v.assetDeviation, 'Covariance', 'Asset deviation', 'number');
  if (id === 'covariance') return result(v.correlation * (v.assetDeviation / 100) * (v.marketDeviation / 100), v.correlation, v.assetDeviation, 'Correlation', 'Asset deviation');
  if (id === 'portfolio-beta') return result((v.weightOne * v.betaOne + v.weightTwo * v.betaTwo) / 100, v.weightOne, v.weightTwo, 'Asset 1 allocation', 'Asset 2 allocation', 'number');
  if (['pe-ratio', 'forward-pe', 'pb-ratio', 'ps-ratio', 'ev-ebitda', 'ev-ebit', 'ev-sales'].includes(id)) return result(v.value / v.metric, v.value, v.metric, 'Value', 'Underlying metric', 'number');
  if (id === 'peg-ratio') return result(v.pe / v.growth, v.pe, v.growth, 'P/E ratio', 'Earnings growth', 'number');
  if (id === 'dividend-yield') return result(v.dividend / v.price * 100, v.dividend, v.price, 'Dividend per share', 'Share price', 'percent', 'money', 'money');
  if (id === 'dividend-payout-ratio') return result(v.dividend / v.eps * 100, v.dividend, v.eps, 'Dividend per share', 'Earnings per share', 'percent', 'money', 'money');
  if (id === 'retention-ratio') return result((v.eps - v.dividend) / v.eps * 100, v.eps, v.dividend, 'Earnings per share', 'Dividend per share', 'percent', 'money', 'money');
  if (id === 'roe') return result(v.netIncome / v.equity * 100, v.netIncome, v.equity, 'Net income', 'Shareholders equity', 'percent', 'money', 'money');
  if (id === 'roa') return result(v.netIncome / v.assets * 100, v.netIncome, v.assets, 'Net income', 'Average assets', 'percent', 'money', 'money');
  if (id === 'roic') return result(v.nopat / v.investedCapital * 100, v.nopat, v.investedCapital, 'NOPAT', 'Invested capital', 'percent', 'money', 'money');
  if (id === 'earnings-yield') return result(v.eps / v.price * 100, v.eps, v.price, 'Earnings per share', 'Share price', 'percent', 'money', 'money');
  const profit = v.revenue - v.costs; return result(profit, v.revenue, v.costs, 'Revenue', 'Costs');
}

const id = document.body.dataset.calculator;
const tool = TOOLS.find((item) => item[0] === id) || PERSONAL[0];
const fields = fieldsFor(id);
document.title = `${tool[1]} | MoneyMaths`;
document.querySelector('#calculator-category').textContent = tool[2];
document.querySelector('#calculator-title').textContent = tool[1];
document.querySelector('#calculator-description').textContent = tool[3];
document.querySelector('#calculator-fields').innerHTML = fields.map((item) => `<label for="${item.id}">${item.label}${item.unit ? ` <span>(${item.unit})</span>` : ''}</label><div class="input-wrap"><span>${item.unit === '₹' ? '₹' : item.unit === '%' ? '%' : item.type === 'date' ? '' : 'N'}</span><input id="${item.id}" type="${item.type}"${item.type === 'number' ? ` min="${item.min}"` : ''} step="${item.step}" value="${item.value}"></div>`).join('');
function formatValue(value, type) { return type === 'percent' ? pct(value) : type === 'number' ? number(value) : money(value); }
function render() { const values = Object.fromEntries(fields.map((item) => { const rawValue = document.querySelector(`#${item.id}`).value; return [item.id, item.type === 'date' ? new Date(`${rawValue}T00:00:00`) : Number(rawValue) || 0]; })); const output = calculate(id, values); document.querySelector('#total-value').textContent = formatValue(output.value, output.valueType); document.querySelector('#invested-value').textContent = output.primaryLabel === 'Months of cover' ? `${number(output.primary)} months` : formatValue(output.primary, output.primaryType); document.querySelector('#returns-value').textContent = output.secondaryLabel === 'Months of cover' ? `${number(output.secondary)} months` : formatValue(output.secondary, output.secondaryType); document.querySelector('#breakdown-one-label').textContent = output.primaryLabel; document.querySelector('#breakdown-two-label').textContent = output.secondaryLabel; document.querySelector('#result-caption').textContent = 'This result uses the assumptions entered above. Actual returns, rates, and costs may vary.'; }
document.querySelector('#calculator-form').addEventListener('submit', (event) => { event.preventDefault(); render(); });
render();
const related = document.querySelector('#related-tools');
related.innerHTML = TOOLS.filter((item) => item[0] !== id && item[2] === tool[2]).slice(0, 4).map((item) => `<a href="${item[0]}.html">${item[1]} <span aria-hidden="true">-&gt;</span></a>`).join('');
