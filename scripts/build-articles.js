const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');
const { marked } = require('marked');

const root = path.resolve(__dirname, '..');
const sourceDirectory = path.join(root, 'content', 'articles');
const sourceImageDirectory = path.join(sourceDirectory, 'images');
const outputDirectory = path.join(root, 'articles');
const outputImageDirectory = path.join(outputDirectory, 'images');
fs.mkdirSync(sourceDirectory, { recursive: true });

const escapeHtml = (value) => String(value || '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const slugify = (value) => String(value)
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const articleFiles = fs.readdirSync(sourceDirectory)
  .filter((file) => file.endsWith('.md'));

const articles = articleFiles.map((file) => {
  const source = fs.readFileSync(path.join(sourceDirectory, file), 'utf8');
  const { data, content } = matter(source);
  const slug = slugify(data.slug || path.basename(file, '.md') || data.title);
  const date = data.date ? new Date(data.date).toISOString().slice(0, 10) : '';
  return {
    title: data.title || 'Untitled article',
    summary: data.summary || '',
    category: data.category || 'Personal finance',
    date,
    image: data.image || '',
    slug,
    html: marked.parse(content)
  };
}).sort((first, second) => second.date.localeCompare(first.date));

fs.mkdirSync(outputDirectory, { recursive: true });
fs.mkdirSync(outputImageDirectory, { recursive: true });
for (const article of articles) {
  if (!article.image) continue;
  const sourceImage = path.join(sourceImageDirectory, article.image);
  if (!fs.existsSync(sourceImage)) {
    throw new Error(`Image not found for ${article.slug}: ${article.image}`);
  }
  fs.copyFileSync(sourceImage, path.join(outputImageDirectory, article.image));
}
fs.writeFileSync(
  path.join(outputDirectory, 'index.json'),
  `${JSON.stringify(articles.map(({ html, ...article }) => article), null, 2)}\n`
);

const articleTemplate = (article) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(article.title)} | MoneyMaths</title>
  <meta name="description" content="${escapeHtml(article.summary)}">
  <link rel="stylesheet" href="../styles.css">
</head>
<body class="article-page">
  <header class="site-header">
    <a class="brand" href="../index.html" aria-label="MoneyMaths home"><span class="brand-mark">M</span><span>Money<span class="brand-accent">Maths</span></span></a>
    <nav class="main-nav" aria-label="Main navigation"><a href="../index.html">Home</a><a href="../index.html#calculators">Calculators</a><a class="active" href="../read.html">News</a></nav>
    <a class="header-action" href="../read.html">All news <span aria-hidden="true">-&gt;</span></a>
  </header>
  <main class="article-shell shell">
    <a class="back-link" href="../read.html">&larr; Back to News</a>
    <p class="eyebrow">${escapeHtml(article.category)}${article.date ? ` &middot; ${escapeHtml(article.date)}` : ''}</p>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="article-summary">${escapeHtml(article.summary)}</p>
    ${article.image ? `<img class="article-cover" src="images/${encodeURIComponent(article.image)}" alt="${escapeHtml(article.title)}" width="1200" height="630">` : ''}
    <article class="article-content">${article.html}</article>
  </main>
  <footer class="site-footer shell"><span>MoneyMaths</span><span>Numbers for real life.</span></footer>
</body>
</html>
`;

for (const article of articles) {
  fs.writeFileSync(path.join(outputDirectory, `${article.slug}.html`), articleTemplate(article));
}

console.log(`Built ${articles.length} article${articles.length === 1 ? '' : 's'}.`);