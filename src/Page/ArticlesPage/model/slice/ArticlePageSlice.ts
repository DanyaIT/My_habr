import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { Article, ArticlesView } from 'entities/Article';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/const';


  
  const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
  })
  

  export const getArticle = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
  )

  
  const ArticlePageSlice = createSlice({
    name: 'ArticlePageSlice',
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticlesView.PLATE
    }),
    reducers: {
      setView: (state, action: PayloadAction<ArticlesView>) => {
        state.view = action.payload;
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload)
      },
      initView: (state) => {
        state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticlesView
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true,
        state.error = undefined
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false,
        articleAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticles.rejected, (state) => {
        state.isLoading = false,
        state.error = 'error'
      })
    }
    
  })

export const {reducer: articlePageReducer} = ArticlePageSlice
export const {actions: articlePageAction} = ArticlePageSlice
