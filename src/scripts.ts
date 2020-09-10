export interface Article {
  title: string
  date: string
  contents: string[]
}

export function createArticle({ title, date, contents }: Article): string {
  return `<article>
      <h2>${title}</h2>
      <h3>${date}</h3>
      <section>
        ${contents.map(p => `<p>${p}</p>`).join('')}
      </section>
    </article>`
}
