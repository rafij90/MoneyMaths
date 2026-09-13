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
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const calculatorFiles = fs.readdirSync(calculatorDirectory)
  .filter((file) => file.endsWith('.html'));

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