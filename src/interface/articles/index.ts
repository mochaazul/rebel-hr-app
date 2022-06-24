import { ResponseStatus } from 'interface';

export interface ArticleState {
    articles: ArticleDetail[];
    loading: boolean;
    error: ResponseStatus;
}

export interface ArticleDetail {
    id: number;
    title: string;
    content: string;
    total_view: number;
    created_by: string;
    created_at: string;
    is_publish: boolean;
    thubmnail: string;
}
export interface PayloadArticle {
    id?: number;
    title?: string;
    meta_description?: string;
    thumbnail_img?: string;
    content?: string;
    created_by?: string;
    tags?: (string | number)[] | null;
    new_tags?: (string | number)[] | null;
    is_publish?: boolean;
}
