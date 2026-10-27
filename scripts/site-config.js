// Single place to set your site's public address.
// Default is the Netlify address. For a custom domain, set SITE_URL in Netlify
// (Site configuration -> Environment variables) or at build time:
//   SITE_URL=https://yourdomain.com npm run build
const SITE_URL = (process.env.SITE_URL || 'https://moneymathseasy.netlify.app').replace(/\/+$/, '');
const SITE_NAME = 'MoneyMaths';

// Clean URLs: /calculators/sip instead of /calculators/sip.html (matches your live links).
// To go back to .html URLs, build with CLEAN_URLS=false.
const CLEAN_URLS = process.env.CLEAN_URLS !== 'false';

const escapeAttr = (value) => String(value || '')
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

// Full public URL for a page path relative to the site root ('' = home page).
const pageUrl = (pagePath = '') => {
  let p = String(pagePath).replace(/^\/+/, '');
  if (CLEAN_URLS) p = p.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '');
  return p ? `${SITE_URL}/${p}` : `${SITE_URL}/`;
};

// Canonical + Open Graph + Twitter tags for one page. `pagePath` is relative to the site root.
const seoTags = ({ pagePath, title, description, type = 'website' }) => {
  const url = pageUrl(pagePath);
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

module.exports = { SITE_URL, SITE_NAME, CLEAN_URLS, pageUrl, seoTags, injectSeo };
