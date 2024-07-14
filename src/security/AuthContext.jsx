import { createContext, useContext, useEffect, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeJwtAuthenticationService, executeRefreshTokenService } from "../api/AuthenticationApiService";
import Login from "../pages/user/Login";
import SellerLogin from "../components/seller/SellerLogin";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export function AuthProtectedRoute({ children }) {
  const auth = useAuth();

  return auth.isAuthenticated ? children : <Login />;
}

export function SellerAuthProtectedRoute({ children }) {
  const auth = useAuth();

  return auth.isAuthenticated ? children : <SellerLogin />;
}

//2: Share the created context with other components
export default function AuthProvider({ children }) {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [isStore, setIsStore] = useState(false)

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
            console.log('refreshing token');
        }
        if(!isAuthenticated)
            refresh();
    }, [])

    async function login(email, password, role) {

        try {
            if(role === `store`)
                setIsStore(true);

            const response = await executeJwtAuthenticationService(email, password, role);

        console.log(`login called with ${email} ${password} ${role}`);
            if(response.status==200){
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

                return true            
            } else {
                logout()
                return false
            }    
        } catch(error) {
            logout()
            console.log(error)
            return false
        }
    }

    // function setUserAccessToken(jwtToken) {
    //     setAuthenticated(true)
    //     setToken(jwtToken)
    //     apiClient.interceptors.request.use(
    //         (config) => {
    //             console.log('intercepting and adding a token')
    //             config.headers.Authorization = jwtToken;
    //             return config
    //     })
    // }

    function logout() {
        setAuthenticated(false)
        setToken(null)
        setIsStore(false);
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, isStore, token}  }>
            {children}
        </AuthContext.Provider>
    )
} 