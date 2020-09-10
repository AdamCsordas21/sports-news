import { listArticles } from './articles'
import articles from './data.json'

(document.getElementById('root') as HTMLDivElement).innerHTML = listArticles(articles)