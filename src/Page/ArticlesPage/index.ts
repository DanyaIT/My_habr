export { ArticlesPageAsync as ArticlesPage} from './ui/ArticlesPage/ArticlesPage.async';
export type {ArticlePageSchema} from './model/types/articlePageSchema'
export {articlePageReducer,articlePageAction} from './model/slice/ArticlePageSlice'
export {fetchArticles} from './model/service/fetchArticles/fetchArticles'
