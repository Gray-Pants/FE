import { apiClient } from "./ApiClient";

export const executeJwtAuthenticationService
    = (email, password, role) =>  {

    if (role === `user`)
        return apiClient.post(`/auth/login`,{email,password}, {
                withCredentials: true
    });

    console.log(`login called with ${email} ${password} ${role}`);
    return apiClient.post(`/auth/store-login`,{email,password}, {
        withCredentials: true
    });
}

export const executeRefreshTokenService
    = () => 
        apiClient.post(`/auth/refresh`,{}, {
            withCredentials: true
        });

export const sendEmail = (email, role) => {
    return apiClient.post(`/mails/verification-requests`,{email, role});
}

export const verifyEmail = (email, authCode, role) => {
    return apiClient.post(`/mails/verifications`,{email, authCode, role});
}

export const signUpReqeust = (name, email, password, verificationCode, role) => {
    return apiClient.post(`/auth/signup`,{name, email, password, verificationCode, role}, {
            withCredentials: true
        });
}