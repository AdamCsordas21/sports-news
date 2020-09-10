export function createArticle(title: string, date: string, paragraphs: string[]): string {
  return `<article>
      <h2>${title}</h2>
      <h3>${date}</h3>
      <section>
        ${paragraphs.map(p => `<p>${p}</p>`).join('')}
      </section>
    </article>`
}
