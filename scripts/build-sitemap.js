const fs = require('node:fs');
const path = require('node:path');
const { SITE_URL, pageUrl, seoTags, injectSeo } = require('./site-config');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const metaOf = (html, key, attr = 'name') => {
  const match = html.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`));
  return match ? match[1] : '';
};

// 1) Add SEO tags to the hand-written top-level pages.
const topPages = [
  { file: 'index.html', pagePath: '', title: 'MoneyMaths | Finance, made clear', description: 'Free finance calculators for SIP, EMI, CAGR, tax, valuation and more. Calculate, analyse and decide with MoneyMaths.' },
  { file: 'read.html', pagePath: 'read.html', title: 'News | MoneyMaths', description: 'Useful updates and clear explainers across personal finance, markets, taxes, startups, and IPOs.' }
];
for (const page of topPages) {
  let html = read(page.file);
  if (!html.includes('<meta name="description"')) {
    html = html.replace('</title>', `</title>\n  <meta name="description" content="${page.description}">`);
  }
  fs.writeFileSync(path.join(root, page.file), injectSeo(html, seoTags(page)));
}

// 2) Add SEO tags to every calculator and article page (these are generated, so we do it here).
const entries = [
  { loc: pageUrl(''), priority: '1.0', changefreq: 'weekly' },
  { loc: pageUrl('read.html'), priority: '0.7', changefreq: 'weekly' }
];

const processFolder = (folder, type, priority) => {
  const dir = path.join(root, folder);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.html')).sort();
  for (const file of files) {
    const filePath = path.join(dir, file);
    const html = fs.readFileSync(filePath, 'utf8');
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || 'MoneyMaths';
    const description = metaOf(html, 'description').replace(/&amp;/g, '&');
    const pagePath = `${folder}/${file}`;
    const unescapedTitle = title.replace(/&amp;/g, '&').replace(/&#039;/g, "'");
    fs.writeFileSync(filePath, injectSeo(html, seoTags({ pagePath, title: unescapedTitle, description, type })));
    entries.push({ loc: pageUrl(pagePath), priority, changefreq: 'monthly' });
  }
};
processFolder('calculators', 'website', '0.8');
processFolder('articles', 'article', '0.6');

// Article dates -> <lastmod>
const index = JSON.parse(read('articles/index.json'));
const dateBySlug = new Map(index.map((a) => [pageUrl(`articles/${a.slug}.html`), a.date]));

const xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
  .concat(entries.map((e) => {
    const lastmod = dateBySlug.get(e.loc);
    return `  <url><loc>${e.loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}<changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`;
  }))
  .concat('</urlset>', '').join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'), xml);

// 3) robots.txt
fs.writeFileSync(path.join(root, 'robots.txt'),
`User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${SITE_URL}/sitemap.xml
`);

console.log(`Sitemap built with ${entries.length} URLs for ${SITE_URL}`);
