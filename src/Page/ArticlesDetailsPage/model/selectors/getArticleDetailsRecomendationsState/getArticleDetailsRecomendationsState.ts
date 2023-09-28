import { StateSchema } from "app/providers/StoreProvider";

export const getArticleDetailsRecomendationsIsLoading = (state:StateSchema) => {
    return state.articleDetailsPage?.recomendations?.isLoading}
    
export const getArticleDetailsRecomendationsError = (state:StateSchema) => {
    return state.articleDetailsPage?.recomendations?.error}