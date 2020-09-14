export interface Article {
  title: string
  date: string
  contents: string[]
}

export function createArticle({ title, date, contents }: Article): string {
  let formattedDate = new Date(date).toLocaleString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return `<article>
      <h2>${title}</h2>
      <h3><time datetime="${date}">${formattedDate}</time></h3>
      <section>
        ${contents.map(p => `<p>${p}</p>`).join('')}
      </section>
    </article>`
}

export function listArticles(articles: Article[]): string {
  return articles.map(createArticle).join('')
}
