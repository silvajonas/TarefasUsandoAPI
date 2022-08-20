import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(senha)
    }

    return (
        <div>
            <label>
                <span>Email</span>
                <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password" value={senha} 
                    onChange={e => setSenha(e.target.value)} />
            </label>

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
         </div>
    )
}