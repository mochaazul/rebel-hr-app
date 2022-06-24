export interface ResponseStatus {
    stat_code?: number;
    stat_msg?: string;
}
export interface ResponseType<T> extends ResponseStatus {
    data: T;
    pagination: Pagination;
}

export interface Pagination {
    count?: number;
    keyword?: string;
    limit?: number;
    offset?: number;
    order?: string;
    page?: number;
    post_type?: string;
    sort?: 'DESC' | 'ASC';
    status?: string;
    search?: string;
    tag?: string;
}

export enum StatusCode {
    SUCCESS = 200,
    FAILED = 400,
}