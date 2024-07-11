import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService
    = (email, password) => 
        apiClient.post(`/auth/login`,{email,password}, {
            withCredentials: true
        });

export const executeRefreshTokenService
    = () => 
        apiClient.post(`/auth/refresh`,{}, {
            withCredentials: true
        });