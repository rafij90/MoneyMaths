const publishedArticles = document.querySelector('#published-articles');
const publishedArticleGrid = document.querySelector('#published-article-grid');

const escapeArticleText = (value) => String(value || '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const renderPublishedArticles = (articles) => {
  if (!articles.length) return;
  publishedArticleGrid.innerHTML = articles.map((article, index) => `
    <article class="reading-card${index === 0 ? ' reading-card-featured' : ''}">
      <p class="card-kicker">${escapeArticleText(article.category)}</p>
      <h3>${escapeArticleText(article.title)}</h3>
      <p>${escapeArticleText(article.summary)}</p>
      <a class="text-link" href="articles/${encodeURIComponent(article.slug)}.html">Read the guide <span aria-hidden="true">-&gt;</span></a>
    </article>
  `).join('');
  publishedArticles.hidden = false;
};

fetch('articles/index.json')
  .then((response) => response.ok ? response.json() : [])
  .then(renderPublishedArticles)
  .catch(() => {});