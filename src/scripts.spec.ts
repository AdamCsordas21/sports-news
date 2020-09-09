import { createArticle } from './scripts';

describe('articles', () => {
  it('creates an article with title and date', () => {
    // given
    
    // when
    const actual = createArticle('news title', 'date')
    // then
    const expected = `<article>
      <h2>news title</h2>
      <h3>date</h3>
    </article>`
    expect(actual).toEqual(expected)
  })
})
