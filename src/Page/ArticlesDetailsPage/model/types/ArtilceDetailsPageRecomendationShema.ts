;
import { EntityState } from "@reduxjs/toolkit";
import { Article } from "entities/Article";

export interface ArtilceDetailsPageRecomendationShema
extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
}