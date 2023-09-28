import { ArticleDetailsPageCommentSchema } from './ArticleDetailsPageCommentSchema';
import { ArtilceDetailsPageRecomendationShema } from "./ArtilceDetailsPageRecomendationShema";


export interface ArticleDetailsPageShema {
    recomendations: ArtilceDetailsPageRecomendationShema,
    comments: ArticleDetailsPageCommentSchema,
}