// Single place to set your site's public address.
// Override at build time:  SITE_URL=https://yourdomain.com npm run build
const SITE_URL = (process.env.SITE_URL || 'https://rafij90.github.io/MoneyMaths').replace(/\/+$/, '');
const SITE_NAME = 'MoneyMaths';

const escapeAttr = (value) => String(value || '')
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

// Canonical + Open Graph + Twitter tags for one page. `pagePath` is relative to the site root.
const seoTags = ({ pagePath, title, description, type = 'website' }) => {
  const url = pagePath ? `${SITE_URL}/${pagePath}` : `${SITE_URL}/`;
  return [
    '<!-- seo:start -->',
    `<link rel="canonical" href="${escapeAttr(url)}">`,
    '<meta name="robots" content="index, follow">',
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:title" content="${escapeAttr(title)}">`,
    `<meta property="og:description" content="${escapeAttr(description)}">`,
    `<meta property="og:url" content="${escapeAttr(url)}">`,
    '<meta name="twitter:card" content="summary">',
    `<meta name="twitter:title" content="${escapeAttr(title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(description)}">`,
    '<!-- seo:end -->'
  ].join('');
};

// Insert (or refresh) the SEO block just before </head>. Safe to run many times.
const injectSeo = (html, tags) => {
  const block = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
  return block.test(html) ? html.replace(block, tags) : html.replace('</head>', `  ${tags}\n</head>`);
};

module.exports = { SITE_URL, SITE_NAME, seoTags, injectSeo };
