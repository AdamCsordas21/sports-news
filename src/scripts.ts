export interface Article {
  title: string
  date: string
  contents: string[]
}

export function createArticle(article: Article): string {
  return `<article>
      <h2>${article.title}</h2>
      <h3>${article.date}</h3>
      <section>
        ${article.contents.map(p => `<p>${p}</p>`).join('')}
      </section>
    </article>`
}
