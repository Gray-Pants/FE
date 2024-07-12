import { apiClient } from "./ApiClient";

export const getMyItems = () => {
    return apiClient.get(`items/myitems`);
}