const {
  createArticle
} = require('./scripts');

describe('articles', () => {
  it('creates an article', () => {
    // given
    
    // when
    const actual = createArticle('hello') 
    // then
    const expected = '<article>hello</article>'
    expect(actual).toEqual(expected)
  })
})
