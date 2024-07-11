import React from "react";
import { useAuth } from "../security/AuthContext";



const Me = (location) => {

    const auth = useAuth();
    console.log(auth.isAuthenticated);
    console.log(auth.email);
    console.log(auth.token);
    return (
        <div>
            <h1>Me</h1>
        </div>
    )
};

export default Me;