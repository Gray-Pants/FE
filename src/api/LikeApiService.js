import { apiClient } from "./ApiClient";

export const getMyLikes = () => {
    return apiClient.get(`likes/my`);
}