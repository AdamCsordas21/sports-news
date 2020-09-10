import { createArticle } from './scripts';

describe('articles', () => {
  it('creates an article with title, date and paragraphs', () => {
    // given
    
    // when
    const actual = createArticle('news title', 'date', ['paragraph 1', 'paragraph 2'])
    // then
    const expected = `<article>
      <h2>news title</h2>
      <h3>date</h3>
      <section>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
      </section>
    </article>`
    expect(actual).toEqual(expected)
  })
})
