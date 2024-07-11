import { createContext, useContext, useEffect, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService, executeRefreshTokenService } from "../api/AuthenticationApiService";
import { Navigate } from 'react-router-dom';

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export function AuthProtectedRoute({ children }) {
  const auth = useAuth();

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
}

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [email, setEmail] = useState(null)

    const [token, setToken] = useState(null)

    useEffect(()=>{

        async function refresh() {
            try {
                const response = await executeRefreshTokenService();
                
                if(response.status==200) {
                    const jwtToken = 'Bearer ' + response.headers['access-token'];
                    setAuthenticated(true)
                    setToken(jwtToken)
                    apiClient.interceptors.request.use(
                        (config) => {
                            console.log('intercepting and adding a token')
                            config.headers.Authorization = jwtToken
                            return config
                        }
                    )           
                } else {
                    logout()
                }    
            } catch(error) {
                logout()
            }
        }
        if(!isAuthenticated)
            refresh();
    }, [])

    async function login(email, password) {

        try {

            const response = await executeJwtAuthenticationService(email, password);

            if(response.status==200){
                const jwtToken = 'Bearer ' + response.headers['access-token'];
                
                setAuthenticated(true)
                setEmail(email)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )

                return true            
            } else {
                logout()
                return false
            }    
        } catch(error) {
            logout()
            return false
        }
    }


    function logout() {
        setAuthenticated(false)
        setToken(null)
        setEmail(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, email, token}  }>
            {children}
        </AuthContext.Provider>
    )
} 