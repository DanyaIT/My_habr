import { SortOrder } from 'shared/types';
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
import { ArticleSortField, ArticleType} from 'entities/Article/model/types/article';
import { TabsItem } from 'shared/ui/Tabs/Tabs';


  
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
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        limit: 9,
        page: 1,
        hasMore: true,
        _inited: false,
        type: ArticleType.ALL,
    }),
    reducers: {
      initState: (state) => {
        const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW) as ArticlesView;
        state.view = view;
        state.limit = view === ArticlesView.LIST? 4 : 9;
        state._inited = true
      },
      setView: (state, action: PayloadAction<ArticlesView>) => {
        state.view = action.payload;
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload)
      },
      setPage: (state, action: PayloadAction<number>) => {
        state.page = action.payload
      },
      setOrder: (state, {payload}: PayloadAction<SortOrder>) => {
        state.order = payload
      },
      setSearch: (state, {payload}: PayloadAction<string>) =>  {
        state.search = payload
      },
      setSort: (state, {payload}: PayloadAction<ArticleSortField>) => {
        state.sort = payload
      },
      setType: (state, {payload}: PayloadAction<ArticleType>) => {
        state.type = payload
      }
      
    },
    extraReducers: (builder) => {
      builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.isLoading = true,
        state.error = undefined

        if(action.meta.arg.repalce){
            articleAdapter.removeAll(state)
        }
        
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false,
        state.hasMore = action.payload.length >= state.limit;
        if(action.meta.arg.repalce){
          articleAdapter.setAll(state, action.payload)
        }else{
          articleAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false,
        state.error = action.payload
      })
    }
    
  })

export const {reducer: articlePageReducer} = ArticlePageSlice
export const {actions: articlePageAction} = ArticlePageSlice
