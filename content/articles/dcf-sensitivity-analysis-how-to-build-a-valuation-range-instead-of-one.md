---
title: "DCF Sensitivity Analysis: How to Build a Valuation Range Instead of One Price"
summary: "How to combine WACC, terminal growth, and operating assumptions to create a two-variable sensitivity table."
category: Financial Modeling
date: 2026-10-28
image: dcf-sensitivity-analysis-how-to-build-a-valuation-range-instead-of-one.jpg
---

*Image source: [Sensitivity table Analysis.jpg](https://commons.wikimedia.org/wiki/File:Sensitivity_table_Analysis.jpg) by GAALYAU, CC0, via Wikimedia Commons*

Have you ever wondered why two analysts can look at the exact same company and arrive at completely different price tags? The secret isn't necessarily that one person is wrong; it is that they are making different assumptions about the future. A Discounted Cash Flow (DCF) model is essentially a math machine that turns your guesses about growth and risk into a single number. But because the future is uncertain, relying on just one number is like trying to hit a moving target while wearing a blindfold.

> ## The core idea in one sentence
> **A sensitivity analysis allows you to stress-test your valuation by showing how the final price changes when you tweak your key assumptions.**

## Why one number is not enough
When you build a DCF model, you choose a Weighted Average Cost of Capital (WACC) and a terminal growth rate. These are your best guesses. However, if your WACC is off by even one percent, the entire valuation can swing wildly. By using a sensitivity analysis, you stop looking for the "perfect" price and start looking for a "reasonable range." This range helps you understand the margin of safety you have if things do not go exactly according to plan.

## The two variables that matter most
In a DCF model, the two biggest "knobs" you can turn are the WACC and the terminal growth rate. The WACC represents the risk of the business. A higher WACC means higher risk, which lowers the value of future cash flows. The terminal growth rate represents how fast you think the company will grow forever after your detailed forecast period ends. If you change these two, your valuation will change immediately.

## An illustrative example
Let’s look at a company with a base valuation of Rs 100 crore. This number is our starting point based on our current assumptions. Now, let’s see what happens if the market environment changes. If the WACC increases from 10% to 12% and the terminal growth rate drops from 3% to 2%, the company’s value does not stay the same. 

Using our calculation, the valuation shifts from Rs 100 crore down to Rs 84.19 crore. This drop happens because a higher discount rate makes future money worth less, and a lower growth rate suggests the company will generate less cash in the long run.

## Building your sensitivity table
To visualize this, we create a grid. You place your WACC values across the top row and your terminal growth rates down the first column. Each cell in the middle represents the valuation result for that specific combination of assumptions. This table becomes your "map" of possibilities.

| Terminal Growth / WACC | 10% WACC | 11% WACC | 12% WACC |
| :--- | :--- | :--- | :--- |
| 2% Growth | Rs 97.09 cr | Rs 88.26 cr | Rs 84.19 cr |
| 3% Growth | Rs 100.00 cr | Rs 90.91 cr | Rs 83.33 cr |
| 4% Growth | Rs 103.09 cr | Rs 93.72 cr | Rs 85.91 cr |

*Note: The values in this table are illustrative representations of how valuation shifts based on changing inputs.*

## How to read the grid
When you look at this table, do not just look for the highest number. Look at the range. In our example, the values range from Rs 83.33 crore to Rs 103.09 crore. This range tells you that the company is likely worth somewhere in this neighborhood. If the current market price is Rs 70 crore, you might feel comfortable because even your "worst-case" scenario is higher than the market price. If the market price is Rs 110 crore, you might decide the company is too expensive based on your assumptions.

## What this means for you
*   **Embrace uncertainty:** Never trust a single number in a valuation model; always demand to see the range.
*   **Identify the pressure points:** Use the table to see which variable—WACC or growth—moves the needle more for your specific company.
*   **Stay grounded:** If your valuation only makes sense under extremely optimistic growth assumptions, you might be overestimating the company's potential.
*   **Plan for the downside:** Always look at the cells in the table where growth is low and risk is high to see if the company remains viable.

## Quick FAQ

**Does a sensitivity analysis prove the future value of a stock?**
No, it does not. It only shows you how your current assumptions interact with each other to produce a result. It is a tool for understanding risk, not a crystal ball.

**How many variables should I include in my table?**
Stick to two variables at a time, like WACC and growth. If you try to include three or more, the table becomes very difficult to read and loses its ability to provide clear insights.

**What should I do if my sensitivity range is too wide?**
A very wide range usually means your assumptions are too broad. Try to refine your WACC or growth estimates based on more specific data to narrow down the range to a more realistic window.

**Why is the WACC so important in this calculation?**
The WACC is the denominator in your valuation formula. Because it is used to discount every future year of cash flow, even a small change in the percentage has a large "compounding" effect on the final valuation.

By building these tables, you move from being a passive observer of stock prices to an active thinker who understands the "why" behind the numbers. You start to see that valuation is as much about the quality of your logic as it is about the math itself. Always remember that the goal is not to be perfectly precise, but to be reasonably accurate. By testing your assumptions, you protect yourself from making decisions based on a single, fragile guess. Keep your model simple, keep your assumptions logical, and always check the range before making a decision. This discipline will serve you well as you continue to learn about financial analysis and the way businesses are valued in the real world. Every professional analyst uses these tables to ensure they are not missing the bigger picture. You now have the same tool in your kit.

---

*This article is for educational purposes and does not constitute investment advice. The examples use illustrative numbers. Always check a company's or bank's latest financial statements, asset quality, and regulatory disclosures before drawing conclusions.*

**Written by Rafijaddin Sardar**

Rafijaddin Sardar is a finance and research professional specializing in equity research, financial analysis, business valuation, and banking risk assessment. His work focuses on financial modeling, corporate performance evaluation, and data-driven insights that connect financial theory with real-world business decisions. Through MoneyMaths, he publishes research-driven financial insights and makes complex financial concepts accessible to a wider audience.
