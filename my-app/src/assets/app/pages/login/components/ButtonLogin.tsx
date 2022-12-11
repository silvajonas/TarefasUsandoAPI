import React, { useContext } from "react";

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onclick: () => void;
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onclick, children }) => {

    return (
        <button type={type} onClick={onclick}>
            {children}
        </button>
    )
}