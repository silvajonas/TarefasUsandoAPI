import React, { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}


interface IUsuarioLogadoContextData {
    nomeDoUsuario: string
    logout: () => void
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData)

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {

    const [nome, setNome] = useState('')

        useEffect(() => {
            setTimeout(() => {
                setNome('Jonas')
            }, 1000)
        })

    const handleLogout = useCallback(() => {
        console.log('logou')
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}
