"use client"
import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [loading, setLoading] = useState(true)


    const checkAuthenticated = async () => {
        const response = await fetch("/api/authenticate")
        const data = await response.json()
        setAuthenticated(data.isAuthenticated)
        if (data.isAuthenticated) {
            setOpen(true)
        }
        setLoading(false)
    }

    const checkDate = () => {
        const date = new Date()
        let raw_date = date.toUTCString().split(" ")
        const current_date = parseInt(raw_date[1])
        return current_date
    }
    useEffect(() => {
        const date = checkDate()
        if (date > 25) {
            setLoading(false)
            setOpen(true)
            setAuthenticated(true)
        } else {
            setOpen(false)
            checkAuthenticated()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, isOpen, setOpen, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
