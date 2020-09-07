const {
  createArticle
} = require('./scripts');

describe('articles', () => {
  it('creates an article with title', () => {
    // given
    
    // when
    const actual = createArticle('news title')
    // then
    const expected = '<article><h2>news title</h2></article>'
    expect(actual).toEqual(expected)
  })
})
