import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleSortField, ArticleType, ArticlesView } from "entities/Article";
import { SortOrder } from "shared/types";

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
    page: number,
    limit: number,
    hasMore: boolean,
    //filter
    view: ArticlesView,
    order: SortOrder,
    sort: ArticleSortField,
    search: string,
    _inited: boolean,
    type: ArticleType,
}