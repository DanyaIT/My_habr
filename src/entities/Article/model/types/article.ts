import { User } from "entities/User"

export enum ArticlesView {
    LIST = "LIST",
    PLATE = "PLATE"
}


export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockBlockType,

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

export enum ArticleBlockBlockType {
    TEXT = "TEXT",
    IMAGE = 'IMAGE',
    CODE = 'CODE',
}


export enum ArticleType {
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
    views: number,
    type: ArticleType [],
    blocks:ArticleBlock [],
}

