import {
    createSlice,
    createEntityAdapter,
    PayloadAction
  } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArtilceDetailsPageRecomendationShema} from 'Page/ArticlesDetailsPage';
import { fetchArticlesRecomendations } from '../services/fetchArticlesRecomendations/fetchArticlesRecomendations';

  
  const recomendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
  })
  

  export const getArticleRecomendations = recomendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recomendations || recomendationsAdapter.getInitialState()
  )

  
  const articleDetailsPageRecomentationsSlice = createSlice({
    name: 'ArticleDetailsPageRecomendationSlice',
    initialState: recomendationsAdapter.getInitialState<ArtilceDetailsPageRecomendationShema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
     
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticlesRecomendations.pending, (state, action) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(fetchArticlesRecomendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false
            recomendationsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchArticlesRecomendations.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
    
  })

export const {reducer: articleDetailsPageRecomentationsReducer} = articleDetailsPageRecomentationsSlice
