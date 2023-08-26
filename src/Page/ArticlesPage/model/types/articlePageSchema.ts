import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticlesView } from "entities/Article";

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
    view: ArticlesView,
}