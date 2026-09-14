const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const calculatorDirectory = path.join(root, 'calculators');
const engine = fs.readFileSync(path.join(root, 'calculator-engine.js'), 'utf8');
const metadataSource = engine.slice(0, engine.indexOf('const money ='));
const context = {};
vm.runInNewContext(`${metadataSource}\nresult = TOOLS;`, context);

const tools = new Map(context.result.map(([id, name, category, description]) => [id, { name, category, description }]));
const pageTemplate = (id) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Calculator | MoneyMaths</title><link rel="stylesheet" href="../styles.css"></head><body class="calculator-page" data-calculator="${id}"><header class="site-header"><a class="brand" href="../index.html">Money<span class="brand-accent">Maths</span></a><nav class="main-nav"><a href="../index.html">Home</a><a class="active" href="../index.html#calculators">Calculators</a></nav></header><main class="calculator-main shell"><div class="calculator-intro"><a class="back-link" href="../index.html#calculators">&larr; All calculators</a><p class="eyebrow" id="calculator-category"></p><h1 id="calculator-title"></h1><p id="calculator-description"></p></div><section class="calculator-layout" aria-label="Financial calculator"><form class="input-panel" id="calculator-form"><div class="panel-heading"><span>01</span><h2>Your inputs</h2></div><div id="calculator-fields"></div><button class="button button-primary calculate-button" type="submit">Calculate result <span>-&gt;</span></button><p class="form-note">Figures are estimates for illustration only, not financial advice.</p></form><div class="result-panel"><div class="result-topline"><span>Estimated result</span><span class="result-status"><i></i> Projection</span></div><output class="total-value" id="total-value"></output><div class="result-breakdown"><div><span id="breakdown-one-label"></span><strong id="invested-value"></strong></div><div><span id="breakdown-two-label"></span><strong id="returns-value"></strong></div></div><p class="result-caption" id="result-caption"></p></div></section><section class="related-tools shell"><p class="eyebrow">Keep exploring</p><div id="related-tools"></div></section></main><script src="../calculator-engine.js"></script></body></html>`;
const dcfAnalysis = '<section class="analysis-panel" id="dcf-analysis"><p class="eyebrow">Analysis</p><h2>DCF forecast and sensitivity</h2><div class="analysis-grid"><div><h3>Forecast table</h3><div class="table-scroll"><table><thead><tr><th>Year</th><th>FCFF</th><th>Present value</th></tr></thead><tbody id="dcf-forecast"></tbody></table></div></div><div><h3>WACC vs growth</h3><div class="table-scroll"><table><thead><tr><th>WACC / growth</th><th id="sensitivity-growth-one"></th><th id="sensitivity-growth-two"></th><th id="sensitivity-growth-three"></th></tr></thead><tbody id="dcf-sensitivity"></tbody></table></div></div></div><p><strong>Formula:</strong> Enterprise value = present value of forecast FCFF + present value of terminal value.</p><p id="dcf-interpretation"></p></section>';
const xirrAnalysis = '<section class="analysis-panel xirr-comparison" id="xirr-comparison"><p class="eyebrow">Comparison</p><h2>XIRR side by side</h2><div class="table-scroll"><table><thead><tr><th>Metric</th><th id="xirr-comparison-name-a">Scenario A</th><th id="xirr-comparison-name-b">Scenario B</th></tr></thead><tbody><tr><th>XIRR</th><td id="xirr-comparison-a"></td><td id="xirr-comparison-b"></td></tr><tr><th>Difference</th><td id="xirr-comparison-delta" colspan="2"></td></tr></tbody></table></div></section>';
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const calculatorFiles = fs.readdirSync(calculatorDirectory)
  .filter((file) => file.endsWith('.html'));

for (const [id] of tools) {
  const filePath = path.join(calculatorDirectory, `${id}.html`);
  if (!fs.existsSync(filePath)) {
    const page = pageTemplate(id).replace('<section class="related-tools shell">', id === 'dcf-valuation' ? `${dcfAnalysis}<section class="related-tools shell">` : id === 'xirr' ? `${xirrAnalysis}<section class="related-tools shell">` : '<section class="related-tools shell">');
    fs.writeFileSync(filePath, page);
    calculatorFiles.push(`${id}.html`);
  } else if (id === 'dcf-valuation') {
    const source = fs.readFileSync(filePath, 'utf8');
    if (!source.includes('id="dcf-analysis"')) fs.writeFileSync(filePath, source.replace('<section class="related-tools shell">', `${dcfAnalysis}<section class="related-tools shell">`));
  } else if (id === 'xirr') {
    const source = fs.readFileSync(filePath, 'utf8');
    const refreshed = source.includes('id="xirr-comparison"')
      ? source.replace(/<section class="analysis-panel xirr-comparison" id="xirr-comparison">[\s\S]*?<\/section>/, xirrAnalysis)
      : source.replace('<section class="related-tools shell">', `${xirrAnalysis}<section class="related-tools shell">`);
    if (refreshed !== source) fs.writeFileSync(filePath, refreshed);
  }
}

for (const file of calculatorFiles) {
  const filePath = path.join(calculatorDirectory, file);
  const source = fs.readFileSync(filePath, 'utf8');
  const idMatch = source.match(/data-calculator="([^"]+)"/);
  const tool = idMatch && tools.get(idMatch[1]);

  if (!tool) {
    throw new Error(`No calculator metadata found for ${file}.`);
  }

  const title = `${tool.name} | MoneyMaths`;
  const description = `${tool.description} Use this free MoneyMaths calculator to explore your result.`;
  const withTitle = source.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  const withDescription = withTitle.includes('<meta name="description"')
    ? withTitle.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(description)}">`)
    : withTitle.replace('</title>', `</title><meta name="description" content="${escapeHtml(description)}">`);

  fs.writeFileSync(filePath, withDescription);
}

console.log(`Built metadata for ${calculatorFiles.length} calculator${calculatorFiles.length === 1 ? '' : 's'}.`);