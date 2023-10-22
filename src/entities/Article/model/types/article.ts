import { User } from "entities/User"
import { ArticleBlockType, ArticleType } from "../consts/articleConsts"

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

