import { useCallback, useMemo, useRef, useState } from "react";
import { useUsuarioLogado } from "../../shared/hooks";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  const inputPassawordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    return email.length * 10000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  const { nomeDoUsuario } = useUsuarioLogado()

  return (
    <div>

      <p>{nomeDoUsuario}</p>

      <p>Quantidade de caracteres de email: {emailLength}</p>

      <InputLogin
        label="Email"
        value={email}
        onChange={(newValue) => setEmail(newValue)}
        onPressEnter={() => inputPassawordRef.current?.focus()}
      />

      <InputLogin
        label="Senha"
        value={password}
        type="password"
        onChange={(newValue) => setPassword(newValue)}
        ref={inputPassawordRef}
      />

      <ButtonLogin type="button" onclick={handleEntrar}>
        Entrar
      </ButtonLogin>
      <ButtonLogin type="button" onclick={handleEntrar}>
        Cadastre-se
      </ButtonLogin>

      {/*<button type="button" onClick={handleEntrar}>
                Entrar
               </button>*/}
    </div>
  );
};
