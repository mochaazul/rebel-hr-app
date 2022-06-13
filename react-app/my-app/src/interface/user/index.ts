import { ResponseType } from "interface/network";

export type UserResponse = ResponseType<UserData>;
export interface UserData {
    accessToken?: string;
    refreshToken?: string;
    name?: string;
    roles?: string[];
    loading?: boolean;
}
