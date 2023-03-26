import axios from 'axios';
import {createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    let user
    useEffect(() => {
      // Perform localStorage action
       user = localStorage.getItem('user')
    }, [])
    // if (typeof window !== 'undefined') {
    //     // Access localStorage here
    //     const user = JSON.parse(localStorage.getItem('user'));
    //   }
    const [currentUser, setCurrenctUser] = useState(user || null);

    const login = async (inputs) => {
    const res = await axios.post(process.env.LOGIN_URL, inputs)
    setCurrenctUser(res.data)
    }

    const logout = async () => {
     await axios.post(process.env.LOGOUT_URL)
    setCurrenctUser(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])
    
    return  (
    <AuthContext.Provider value={{currentUser, login, logout}}>{children}
    </AuthContext.Provider>)
}

