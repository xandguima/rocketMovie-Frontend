import { useState } from "react";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { ContainerHeader,Profile } from "./style";
import {Input} from '../../components/Input'
import { Link } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
export function Header(){

  const [search,setSearch] = useState('');



  const {signOut,user} = useAuth();
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceHolder

  return(
    <ContainerHeader>
      <h1>RocketMovies</h1>
      
      <Input 
      placeholder="Pesquisar pelo título"
      onChange={()=>setSearch(e.target.value)}

      />
      <Profile>
        <div>
          <Link id="linkStrong" to='/profile'><strong>Alexandre Guimarães</strong></Link> 
          <Link to='/' onClick={signOut}>sair</Link>
        </div>
        <Link id="linkImg" to="/profile"><img src={avatarUrl} alt="imagem de perfil"/></Link>
      </Profile>
    </ContainerHeader>
  )
}