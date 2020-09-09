export function createArticle(title: string, date: string, paragraph: string): string {
  return `<article>
      <h2>${title}</h2>
      <h3>${date}</h3>
      <p>${paragraph}</p>
    </article>`
}
