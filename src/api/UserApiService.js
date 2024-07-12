import { apiClient } from "./ApiClient";

export const getMyProfile = () => {
    return apiClient.get(`users/me`);
}