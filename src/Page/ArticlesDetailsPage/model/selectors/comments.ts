import { StateSchema } from "app/providers/StoreProvider";


export const getArticleDetailsCommentIsloading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading
export const getArticleDetailsCommentError = (state: StateSchema) => state.ArticleDetailsComments?.error