---
title: "How to Value a Bank: The Methods That Work, and the Ones That Don't"
description: "A ranked guide to valuing a commercial bank. Learn why P/B with ROE, residual income, and the dividend discount model work, and why EV/EBITDA and a standard DCF fail for banks."
category: Valuation
date: 2026-10-25
read_time: "8 min read"
---

If you have valued a manufacturing or a consumer company before, you might think valuing a bank is the same job with different numbers. It is not. Many of the tools you learned first, like EV/EBITDA and the standard free cash flow DCF, give wrong or meaningless answers for banks.

This article explains why banks are different, which methods work best (ranked), and which ones you should avoid.

## Why banks are different

For a normal company, debt is a source of funding. You borrow money, build a factory, and sell products. For a bank, **debt is the raw material.** Deposits and borrowings are what the bank lends out. Interest is its main business, not a side cost.

This one fact breaks several things:

- **Enterprise value makes no sense.** EV = market cap + debt - cash. A bank's "debt" (deposits) is part of its operations, and its "cash" is a regulatory requirement. You cannot separate financing from operating.
- **Free cash flow is not clear.** When a bank grows its loans, is that spending (capex) or operations? Cash flow statements of banks are messy and hard to interpret.
- **Capital is regulated.** A bank cannot freely pay out all its profit. It must keep capital ratios (CET1, CRAR) above the regulator's minimum. So what shareholders can actually *take out* depends on capital rules.

Because of this, we value banks from the **shareholder's side (equity value directly)**, not from the whole-firm side.

## The ranking: best methods for valuing a bank

### Rank 1: Price-to-Book (P/B) justified by ROE

This is the workhorse of bank valuation, and for good reason.

A bank's balance sheet is mostly financial assets (loans, bonds) that are carried near their real value, unlike a factory or a brand. So **book value is a meaningful anchor**. But a bank with a higher return on equity deserves a higher multiple of book value.

The link between the two is the **justified P/B**:

> Justified P/B = (ROE - g) ÷ (Cost of equity - g)

Where *g* is the long-term growth rate.

**Example:** A bank has ROE of 16%, cost of equity of 13%, and long-term growth of 8%.

> Justified P/B = (16% - 8%) ÷ (13% - 8%) = 8% ÷ 5% = **1.6x**

If the bank trades at 1.2x book, it may be cheap. If it trades at 2.5x, the market is pricing in either higher ROE, higher growth, or lower risk than you assume.

**Why it ranks first:** It is simple, it uses numbers that banks report clearly, and it ties price directly to profitability. The main rule is that **P/B alone is meaningless without ROE.** A low P/B bank with poor ROE is not cheap. It is correctly priced.

**Watch out for:** Book value that is overstated because of hidden bad loans. If a bank under-reports its non-performing assets (NPAs), its true book value is lower than shown.

### Rank 2: Residual Income Model (RIM)

The residual income model says a bank is worth its book value **plus** the present value of the extra profit it earns above what shareholders demand.

> Residual income = Net profit - (Cost of equity × Opening book value)

> Value = Book value today + Present value of all future residual income

**Example:** A bank has book value of ₹100 per share, ROE of 16%, and cost of equity of 13%. Each year it earns ₹16, but shareholders only "require" ₹13. The ₹3 difference is residual income. If this continues and grows, you add its present value to the ₹100.

**Why it ranks second:** It is the same idea as justified P/B, but it lets you model each year separately. You can show ROE fading from 18% to 14% over five years, for example. That is more realistic than assuming one fixed ROE forever. It also starts from book value, so a large part of the value is already "in hand," which makes the estimate less sensitive to far-future guesses than a typical DCF.

### Rank 3: Dividend Discount Model (DDM) and Free Cash Flow to Equity (FCFE)

The DDM values a bank as the present value of dividends it will pay to shareholders.

For banks, the better version is often the **"excess capital" DDM** (a form of FCFE). It asks: how much profit can the bank pay out *after* keeping enough capital to support its loan growth and meet regulatory ratios?

> Distributable cash = Net profit - (Growth in risk-weighted assets × Target CET1 ratio)

**Example:** A bank earns ₹1,000 crore. Its risk-weighted assets will grow by ₹5,000 crore, and it must hold 11% CET1 against that. It needs ₹550 crore of new capital. So only ₹450 crore can be distributed.

**Why it ranks third:** It matches how banks really work, because capital is the bottleneck. The weakness is that it is **very sensitive to assumptions** about growth, payout, and terminal value. Many banks also pay out less than they could, so using actual dividends can undervalue them. The excess capital version solves that, but it needs more work.

### Rank 4: Relative valuation with peer multiples (P/E, P/B, P/ABV)

Comparing a bank with similar banks is useful and fast. The common multiples are:

- **P/E** (price to earnings)
- **P/B** (price to book)
- **P/ABV** (price to adjusted book value, which deducts net NPAs, giving a cleaner base)

**Why it ranks fourth:** It tells you what the market currently pays, not what the bank is *worth*. If the whole banking sector is overpriced, every bank looks "fairly valued" relative to the others. Peer comparison is best used to **check** your intrinsic value from Ranks 1 to 3, not to replace it.

**Tip:** Only compare banks of similar type. A public sector bank, a private bank, and a small finance bank have different ROE, risk, and growth. Comparing across them without adjusting leads to wrong conclusions.

### Rank 5: Sum-of-the-parts (SOTP)

Some banks own valuable subsidiaries, such as insurance, asset management, or broking. SOTP values the core bank and each subsidiary separately and adds them up, usually with a holding company discount.

**Why it ranks fifth:** It is essential for banks with big subsidiaries, because the market often misprices them. But it is not a standalone method. For a pure lending bank with no major subsidiaries, it adds little.

## Quick comparison

| Rank | Method | Best used for | Main weakness |
|---|---|---|---|
| 1 | P/B justified by ROE | Fast, reliable anchor | Depends on honest book value |
| 2 | Residual income | Modeling changing ROE | Needs good forecasts |
| 3 | DDM / FCFE (excess capital) | Capital-aware intrinsic value | Very sensitive to assumptions |
| 4 | Peer multiples | Market sanity check | Reflects market mood, not value |
| 5 | Sum-of-the-parts | Banks with big subsidiaries | Not standalone |

## Methods you should NOT use for banks

### 1. EV/EBITDA

This is the most common mistake. For a bank, interest is revenue, and deposits are inventory. EBITDA adds back interest and depreciation, which strips out the bank's core business. Enterprise value also mixes deposits (operating) and borrowings (financing). The result is a number with no real meaning.

### 2. Standard FCFF DCF (unlevered free cash flow)

FCFF discounts cash flow *before* debt payments at the WACC. For a bank, there is no clean "before debt" cash flow, because debt is the business. Discounting at WACC also makes little sense when the cost of debt (deposit rates) is part of operating margin. A standard FCFF DCF on a bank almost always produces unreliable results.

### 3. EV/Sales and other revenue multiples

A bank's "revenue" depends on how you count interest income, interest expense, and fees. Two banks with the same revenue can have very different profitability, because one pays far more for deposits. Revenue multiples ignore margin, credit quality, and capital.

### 4. P/E alone, without context

P/E is popular but dangerous for banks. A bank can show a low P/E just before a bad-loan cycle, because earnings peak when provisions are low. Earnings are also affected by one-time items such as treasury gains and tax effects. Use P/E only alongside ROE, asset quality, and book value.

### 5. P/B alone, without ROE

We said P/B ranks first, but only when paired with ROE. A bank trading at 0.6x book may look cheap, but if its ROE is below its cost of equity, it **deserves** to trade below book. Cheap multiples without quality are a classic value trap.

### 6. Valuing on book value that you have not checked

If a bank hides stressed loans, its reported book value is inflated. Always check gross and net NPAs, provision coverage, and restructured loans. A good habit is to adjust book value for expected losses before using any multiple.

## A simple step-by-step process

1. **Check quality first.** Look at NPAs, provision coverage, capital ratios (CET1, CRAR), and the share of stable deposits (CASA).
2. **Estimate sustainable ROE.** Use a 5-year average, not just the best recent year. Break it down: net interest margin, cost-to-income ratio, credit cost, and leverage.
3. **Estimate cost of equity.** Use risk-free rate + beta × equity risk premium, with a small adjustment for bank-specific risk.
4. **Value with Rank 1 and Rank 2.** Calculate the justified P/B, then build a residual income model to cross-check.
5. **Cross-check with peers.** See whether your answer is far from where similar banks trade, and ask why.
6. **Stress test.** Reduce ROE by 2 to 3 percentage points and increase credit costs. If the value drops sharply, the bank is fragile.

## Key takeaways

- A bank is valued on **equity**, not enterprise value, because debt is its raw material.
- **ROE and P/B go together.** Justified P/B = (ROE - g) ÷ (Cost of equity - g).
- **Residual income** and **excess-capital DDM** are the best intrinsic methods.
- **Peer multiples** are a sanity check, not a valuation by themselves.
- **Avoid EV/EBITDA, standard FCFF DCF, and revenue multiples.** They do not fit how banks work.
- **Asset quality decides everything.** Even the best method fails if the reported book value is not real.

## Quick FAQ

**Why can't I use WACC for a bank?**
WACC mixes debt and equity costs for a firm whose debt is separate from operations. A bank's deposits are part of its operations, so the bank's value is found by discounting equity cash flows at the cost of equity.

**Is a low P/B bank always cheap?**
No. Compare it with ROE. A bank earning less than its cost of equity should trade below book value. A low P/B is cheap only when ROE is healthy and the market is too pessimistic.

**Which single method should a beginner start with?**
Start with justified P/B using ROE, growth, and cost of equity. It is simple, and it teaches you how profitability drives value.

**Does this work for NBFCs and small finance banks too?**
The same logic mostly applies, since they also lend with borrowed money. But they usually have higher growth, different funding costs, and different risk, so use their own peer group and be more careful with assumptions.

---

*This article is for educational purposes and does not constitute investment advice. The examples use illustrative numbers. Always check a bank's latest financial statements, asset quality, and regulatory disclosures before drawing conclusions.*

---

**Written by Rafijaddin Sardar**

Rafijaddin Sardar is a finance professional focused on financial modeling, investment analysis, and data-driven research. His valuation work covers discounted cash flow (DCF), comparable company multiples, justified multiples, relative valuation, residual income valuation, and private company valuation. He also builds startup forecasting models, analyses banks and their peers, and develops Python-based tools for market data and simulations. He writes to make complex finance topics simple, practical, and easy to apply.
