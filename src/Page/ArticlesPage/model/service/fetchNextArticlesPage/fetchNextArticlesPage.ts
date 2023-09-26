import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlePage, getArticlePageHasMore, getArticlePageIsLoading } from "../../selectors/getArticlePageState/ArticleViewSelector";
import { articlePageAction } from "../../slice/ArticlePageSlice";
import { fetchArticles } from "../fetchArticles/fetchArticles";





export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'fetchNextArticlesPage',
    async (_, thunkApi) => {
        const {getState, dispatch} = thunkApi
        
        const isLoading = getArticlePageIsLoading(getState())
        const page = getArticlePage(getState())
        const hasMore = getArticlePageHasMore(getState())

        if(hasMore && !isLoading){
            dispatch(fetchArticles({}))
            dispatch(articlePageAction.setPage(page + 1))
        }
         
    }
)