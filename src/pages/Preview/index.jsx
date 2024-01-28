import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { FiX } from 'react-icons/fi';
import {FiClock,FiArrowLeft} from 'react-icons/fi'
import {useAuth} from '../../hooks/auth'

import { Link, useParams} from 'react-router-dom';

import {ContainerPreview, Content} from './style';
import { useNavigate } from 'react-router-dom';
import {Header} from '../../components/Header';
import {Star} from '../../components/Star';
import {Tag} from '../../components/Tag';
import {ButtonText} from '../../components/ButtonText';



export function Preview(){
  const [data,setData]=useState(null);
  const {user}=useAuth();
  const navigate=useNavigate();
  
  const params =useParams();

  useEffect(()=>{
    async function fetchMovie(){
      const response =await api.get(`/notes/${params.id}`);
      setData(response.data)
    }
    fetchMovie();
  },[])

  async function handleDelete(){
    const confirm = window.confirm('Tem certeza que deseja deletar esse filme?')
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate("/")
      
    }
  }
  function handleBack(){
    navigate(-1)
  }

  return(
    <ContainerPreview>
      <Header/>
      {
        data &&
      <Content> 
        
        <ButtonText  icon={FiArrowLeft} title="Voltar" onClick={handleBack}/>
      
        
        <div className="noteMovie">
           <header>
            <div>
              <h1>{data.note.title}</h1>
              <section>
                {data.note.score>=1?<Star isFilled />:<Star/>}
                {data.note.score>=2?<Star isFilled />:<Star/>}
                {data.note.score>=3?<Star isFilled />:<Star/>}
                {data.note.score>=4?<Star isFilled />:<Star/>}
                {data.note.score>=5?<Star isFilled />:<Star/>}
              </section>
            </div>
            <div className="descriptionAuthor">
              <img src="https://github.com/xandguima.png" alt="imagem de perfil"/>
              <span>Por {user.name}</span>
              <FiClock/>
              <span>{data.note.created_at}</span>
            </div>
          </header>
          <div className="tags">
          {
             data.tags.map(tag=>(
                <Tag
                key={String(tag.id)} 
                title={tag.name}
                />
             ))
             }
          </div>
        
        <div className="descriptionMovie">
          <p>
            {data.note.description}
          </p>
        </div> 
        <div className="delete" >
          <ButtonText icon={FiX} title="Deletar"onClick={handleDelete}/>
       </div> 
      </div>
      </Content>
      }
    </ContainerPreview>
  )
}