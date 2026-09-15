const publishedArticles = document.querySelector('#published-articles');
const publishedArticleGrid = document.querySelector('#published-article-grid');
const newsFilters = document.querySelector('#news-filters');
const newsCount = document.querySelector('#news-count');
const newsEmpty = document.querySelector('#news-empty');

const categories = ['all', 'personal finance', 'savings', 'tax', 'market', 'startup', 'ipo'];
let allArticles = [];
let activeCategory = new URLSearchParams(window.location.search).get('category')?.toLowerCase() || 'all';
if (!categories.includes(activeCategory)) activeCategory = 'all';

const escapeArticleText = (value) => String(value || '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const categoryLabel = (category) => category === 'ipo'
  ? 'IPO'
  : category.replace(/\b\w/g, (letter) => letter.toUpperCase());

const renderFilters = () => {
  newsFilters.innerHTML = categories.map((category) => `
    <button class="news-filter${activeCategory === category ? ' is-active' : ''}" type="button" data-category="${category}" aria-pressed="${activeCategory === category}">
      ${categoryLabel(category)}
    </button>
  `).join('');
};

const renderPublishedArticles = () => {
  const articles = activeCategory === 'all'
    ? allArticles
    : allArticles.filter((article) => String(article.category || '').toLowerCase() === activeCategory);
  publishedArticleGrid.innerHTML = articles.map((article, index) => `
    <article class="reading-card${index === 0 ? ' reading-card-featured' : ''}">
      <p class="card-kicker">${escapeArticleText(categoryLabel(article.category || 'News'))}</p>
      <h3>${escapeArticleText(article.title)}</h3>
      <p>${escapeArticleText(article.summary)}</p>
      <a class="text-link" href="articles/${encodeURIComponent(article.slug)}.html">Read the story <span aria-hidden="true">-&gt;</span></a>
    </article>
  `).join('');
  newsCount.textContent = `${articles.length} ${articles.length === 1 ? 'story' : 'stories'}`;
  newsEmpty.hidden = articles.length > 0;
  publishedArticles.hidden = false;
};

newsFilters.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  const url = new URL(window.location.href);
  if (activeCategory === 'all') url.searchParams.delete('category');
  else url.searchParams.set('category', activeCategory);
  window.history.replaceState({}, '', url);
  renderFilters();
  renderPublishedArticles();
});

fetch('articles/index.json')
  .then((response) => response.ok ? response.json() : [])
  .then((articles) => {
    allArticles = Array.isArray(articles) ? articles : [];
    renderFilters();
    renderPublishedArticles();
  })
  .catch(() => {});