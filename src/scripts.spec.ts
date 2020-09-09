import { createArticle } from './scripts';

describe('articles', () => {
  it('creates an article with title, date and paragraph', () => {
    // given
    
    // when
    const actual = createArticle('news title', 'date', 'paragraph')
    // then
    const expected = `<article>
      <h2>news title</h2>
      <h3>date</h3>
      <p>paragraph</p>
    </article>`
    expect(actual).toEqual(expected)
  })
})
