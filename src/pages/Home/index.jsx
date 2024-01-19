import { useState,useEffect } from 'react';
import { FiPlus } from 'react-icons/fi'

import { Link,useNavigate } from 'react-router-dom';

import {api} from '../../services/api'

import{useAuth} from '../../hooks/auth'

import { ContainerHome,Content, ListMovies } from "./style";

import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import {MovieNote} from '../../components/MovieNote'

export function Home(){

  const [search,setSearch] = useState('');
  const [movies,setMovies] = useState([]);

  const navegate=useNavigate();
  const handleSearch = async (lastSearch)=>{
    setSearch(lastSearch)
  }

  function handlePreview(id){
    navegate(`/preview/${id}`)

  }

  useEffect(()=>{
    async function fetchMovie(){
      const response =await api.get(`/notes?title=${search}`)
      setMovies(response.data)
    }
    fetchMovie()
    
  },[search])

  return( 
    <ContainerHome>
      <Header onSearch={handleSearch}/>
      <Content>
        <header>
          <h1>Meus filmes</h1>
          <Link to='/create'>
            <Button icon={FiPlus} title="Adicionar filme"/>
          </Link>
        </header>
      </Content>
        <ListMovies>
          <div className="movies">
            {
             movies.map(movie=>(
                <MovieNote
                key={String(movie.id)} 
                data={movie}
                onClick={()=>handlePreview(movie.id)}
                />
             ))
             }
          </div>
        </ListMovies>
    </ContainerHome>
    
  )
}