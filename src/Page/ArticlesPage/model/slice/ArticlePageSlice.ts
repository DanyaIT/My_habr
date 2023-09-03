
import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticlesView } from 'entities/Article';
import { fetchArticles } from '../service/fetchArticles/fetchArticles';
import { LOCAL_STORAGE_ARTICLES_VIEW } from 'shared/const/const';
import { ArticlePageSchema } from '../types/articlePageSchema';


  
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
        view: ArticlesView.PLATE,
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
      setView: (state, action: PayloadAction<ArticlesView>) => {
        state.view = action.payload;
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload)
      },
      initState: (state) => {
        const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticlesView;
        state.view = view;
        state.limit = view === ArticlesView.LIST? 4 : 9;
        state._inited = true
      },
      setPage: (state, action: PayloadAction<number>) => {
        state.page = action.payload
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
        articleAdapter.addMany(state, action.payload)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload
      })
    }
    
  })

export const {reducer: articlePageReducer} = ArticlePageSlice
export const {actions: articlePageAction} = ArticlePageSlice
