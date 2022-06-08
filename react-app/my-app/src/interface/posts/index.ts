export interface PostDetail {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface Posts {
    posts: PostDetail[];
}
