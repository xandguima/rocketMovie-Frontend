
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useState,useEffect } from "react";
import {Input} from '../../components/Input';
import { ContainerHeader,Profile } from "./style";
import { Link,useNavigate } from 'react-router-dom';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';

export function Header({onSearch=()=>{}}){
  const [search,setSearch] = useState('');
  const {signOut,user} = useAuth();
  const navigate=useNavigate()

  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceHolder;

  async function handleSearch(){
    navigate("/");
    signOut();
  }
  
  useEffect(()=>{
   onSearch(search);
  },[search])


  return(
    <ContainerHeader>
      <h1>RocketMovies</h1>
      
      <Input 
      placeholder="Pesquisar pelo título"
      onChange={(e)=>setSearch(e.target.value)}
      />

      <Profile>
        <div>
          <Link id="linkStrong" to='/profile'><strong>{user.name}</strong></Link> 
          <Link to='/' onClick={handleSearch}>sair</Link>
        </div>
        <Link id="linkImg" to="/profile"><img src={avatarUrl} alt="imagem de perfil"/></Link>
      </Profile>
    </ContainerHeader>
  )
}