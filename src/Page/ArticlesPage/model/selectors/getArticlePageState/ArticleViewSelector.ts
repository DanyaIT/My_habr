import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesView } from "entities/Article";



export const getArticlePageView = (state: StateSchema) => state.articlePage?.view || ArticlesView.PLATE