import React, { useState } from 'react';

const AuthContext = React.createContext(null); 

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const logoutHandler = () => {
        setIsLoggedIn(false); 
    }

    const loginHandler = () => {
        setIsLoggedIn(true);
    }

    return(
        <AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext; 