import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesView } from "entities/Article";



export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticlesView.PLATE
export const getArticlePage = (state: StateSchema) => state.articlePage?.page || 1
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore || false
export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading