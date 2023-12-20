import { ContainerHeader,Profile } from "./style";
import {Input} from '../../components/Input'
export function Header(){
  return(
    <ContainerHeader>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to ="/profile">
        <div>
          <strong>Alexandre Guimarães</strong>
          <a href="http:/">sair</a>
        </div>
        <img src="https://github.com/xandguima.png" alt="imagem de perfil"/>
      </Profile>
    </ContainerHeader>
  )
}