import { Rotas } from "./routes"
import { UsuarioLogadoProvider } from "./shared/contents"


export const App = () => {
  
  return (
    <UsuarioLogadoProvider>
      <Rotas />
    </UsuarioLogadoProvider>
    
  )
}
