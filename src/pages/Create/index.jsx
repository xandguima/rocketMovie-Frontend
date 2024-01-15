import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi'


import{ContainerCreate,Content} from './style'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import {Input} from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Textarea} from '../../components/Textarea'
import {MarkersMovie} from '../../components/MarkersMovie'

export function Create(){

  const [title,setTitle]=useState('')
  const [score,setScore]=useState('')
  const [description,setDescription]=useState('')

  const [marks,setMarks]= useState([]);
  const [newMarks,setNewMarks]= useState('');

  const navigate = useNavigate();
  

  function handleAddMarks(){
    setMarks(prevState=>[newMarks,...prevState]);
    setNewMarks('');
  }

  function handleRemoveMarks(deleted){
    setMarks(prevState=>prevState.filter(mark=>mark!==deleted));
  }
  
  async function handleNewMovie(){
    if(!title || !description || !score || marks.length<1){
      return alert("Preencha todos os campos")
    }
    if(newMarks){
      return alert("Marcador em aberto, adicione o marcador em aberto ou apague")
     
    }
    await api.post("/notes",{
      title,
      description,
      score,
      tags:marks
    })

    alert("Nota criada com sucesso!")

    navigate("/");
  }

  return(
    <ContainerCreate>
      <Header/>
      <Content>  
        <ButtonText  icon={FiArrowLeft} title="Voltar"/>
        <form>
          <h1>Novo filme</h1>
          <section>
            <Input 
            placeholder="Título"
            onChange={e=>setTitle(e.target.value)}
            />
            <Input 
            placeholder="Sua nota (de 0 a 5)"
            onChange={e=>setScore(e.target.value)}
            onKeyPress={(event) => {
              // Allow only numbers
              if (!/[0-5]/.test(event.key)) {
                event.preventDefault();
              }
            }
            }
            maxLength={1}
            />
          </section>
          <div className='textArea'>
            <Textarea 
            placeholder="Observações"
            onChange={e=>setDescription(e.target.value)}
            />
          </div>
          
          <div className='markers'>
            <h3>Marcadores</h3>
            <section> 
              <MarkersMovie 
              isNew 
              placeholder="Novo marcador"
              value={newMarks}
              onChange={e=>setNewMarks(e.target.value)}
              onClick={handleAddMarks}
              />
              {marks.map((mark,index)=>(
                <MarkersMovie
                key={String(index)}
                value={mark}
                onClick={()=>handleRemoveMarks(mark)}
                />
              ))}
             
            </section>
          </div>
          
          
          <Button title="Salvar alterações" onClick={handleNewMovie}/>
          

        </form>
        
      </Content>
    </ContainerCreate>
  ) 
}  
