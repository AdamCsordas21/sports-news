export function createArticle(title: string, date: string, paragraphs: string[]): string {
  return `<article>
      <h2>${title}</h2>
      <h3>${date}</h3>
      <section>
        <p>${paragraphs.join(`</p>
        <p>`)}</p>
      </section>
    </article>`
}
