import { ArtilceDetailsPageRecomendationShema } from './model/types/ArtilceDetailsPageRecomendationShema';
export {ArticlesDetailsPageAsync as ArticlesDetailsPage} from './ui/ArticlesDetailsPage/ArticlesDetailsPage.async'
export {ArticleDetailsPageCommentSchema} from './model/types/ArticleDetailsPageCommentSchema'
export {getArticleComments, articleDetailsPageCommentReducer}  from './model/slices/ArticleDetailsCommentSlice'
export {getArticleDetailsCommentIsloading, getArticleDetailsCommentError} from './model/selectors/getArticleDetailsCommentState/getArticleDetailsCommentState'
export {fetchCommentsByArticleId} from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
export {addCommentForArticle} from './model/services/addCommentForArticle/addCommentForArticle'
export {ArtilceDetailsPageRecomendationShema} from './model/types/ArtilceDetailsPageRecomendationShema'
export {articleDetailsPageReducer} from './model/slices/index'