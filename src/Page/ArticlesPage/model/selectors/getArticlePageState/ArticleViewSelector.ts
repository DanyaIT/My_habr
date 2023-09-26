
import { StateSchema } from "app/providers/StoreProvider";
import { ArticleType, ArticlesView } from "entities/Article";



export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticlesView.PLATE
export const getArticlePage = (state: StateSchema) => state.articlePage?.page || 1
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 9
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false;
export const getArticleInited = (state: StateSchema) => state.articlePage?._inited;
export const getArticleOrder = (state: StateSchema) => state.articlePage?.order ?? ''
export const getArticleSort = (state: StateSchema) => state.articlePage?.sort ?? ''
export const getArticleSearch = (state: StateSchema) => state.articlePage?.search ?? ''
export const getArticleType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL