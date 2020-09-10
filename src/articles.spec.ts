import { createArticle, Article, listArticles } from './articles';

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

  it('lists all articles', () => {
    // given
    const articles: Article[] = [
      {
        title: 'news title 1',
        date: 'date 1',
        contents: ['paragraph 1']
      },
      {
        title: 'news title 2',
        date: 'date 2',
        contents: ['paragraph 2']
      }
    ]
    // when
    const actual = listArticles(articles)
    // then
    const expected = `<article>
      <h2>news title 1</h2>
      <h3>date 1</h3>
      <section>
        <p>paragraph 1</p>
      </section>
    </article><article>
      <h2>news title 2</h2>
      <h3>date 2</h3>
      <section>
        <p>paragraph 2</p>
      </section>
    </article>`
    expect(actual).toEqual(expected)
  })
})
