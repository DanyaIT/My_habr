import { User } from "entities/User"

export enum ArticleSortField {
    VIEW = 'view',
    CREATED = 'createdAt',
    TITLE = 'title'
}

export enum ArticlesView {
    LIST = "LIST",
    PLATE = "PLATE"
}


export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType,

}

export interface ArticleTextBlock extends ArticleBlockBase{
    title: string,
    paragraphs: string[],
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    code: string,
}

export interface ArticleImageBlock extends ArticleBlockBase {
    title?:string,
    src: string,
}

export enum ArticleBlockType {
    TEXT = "TEXT",
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}


export enum ArticleType {
    ALL = 'ALL',
    IT = "IT",
    SCIENCE = "SCIENCE",
    POLITICS = "POLITICS",
}

export type ArticleBlock = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock

export interface Article {
    id: string,
    title : string,
    subtitle : string,
    user: User,
    createdAt : string,
    img: string
    view: number,
    type: ArticleType [],
    blocks:ArticleBlock [],
}

