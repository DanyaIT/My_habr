



export {ArticleDetails} from './ui/ArticleDetails/ArticleDetails'
export {Article, ArticlesView} from './model/types/article'
export {ArticleDetailsShema} from './model/types/articleDetailsShema'
export {fetchArticleById} from './model/services/fetchArticleById/fetchArticleById';

export {ArticleCodeBlockComponent} from './ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
export {ArticleTextBlockComponent} from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
export {ArticleImageBlockComponent} from './ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
export {ArticleList} from './ui/ArticleList/ArticleList';

export {getArticleDetailsData} from './model/selectors/getArticleDetailsData/getArticleDetailsData';
export {getArticleDetailsError} from './model/selectors/getArticleDetailsError/getArticleDetailsError';
export {getArticleDetailsLoading} from './model/selectors/getArticleDetailsLoading/getArticleDetailsLoading';

export {articleDetailsReducer, articleDetailsAction} from './model/slice/ArticleDetailsSlice'