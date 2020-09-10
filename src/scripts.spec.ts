import { createArticle, Article } from './scripts';

describe('articles', () => {
  it('creates an article with title, date and paragraphs', () => {
    // given
    const article: Article = {
      title: 'news title',
      date: 'date',
      contents: ['paragraph 1', 'paragraph 2']
    }
    // when
    const actual = createArticle(article)
    // then
    const expected = `<article>
      <h2>news title</h2>
      <h3>date</h3>
      <section>
        <p>paragraph 1</p><p>paragraph 2</p>
      </section>
    </article>`
    expect(actual).toEqual(expected)
  })
})
