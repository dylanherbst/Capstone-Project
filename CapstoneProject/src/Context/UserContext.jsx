import React from "react";
import { useContext, useState } from "react";

const UserContext = React.createContext();


export const UserProvider = (props) => {

    const [currentUser, setCurrentUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : {};
    });
   
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));

    }

    const handleLogOut = () => {
        setCurrentUser({});
        localStorage.removeItem('currentUser');
    }

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, handleLogOut }}>
            {props.children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}

