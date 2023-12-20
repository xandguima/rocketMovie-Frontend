import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import{ContainerCreate,Content} from './style'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import {Input} from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {Textarea} from '../../components/Textarea'
import {MarkersMovie} from '../../components/MarkersMovie'

export function Create(){
  return(
    <ContainerCreate>
      <Header/>
      <Content>
      
        <ButtonText  icon={FiArrowLeft} title="Voltar"/>
     
       
        <form>
          <h1>Novo filme</h1>
          <section>
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </section>
          <div className='textArea'>
            <Textarea placeholder="Observações"/>
          </div>
          
          <div className='markers'>
            <h3>Marcadores</h3>
            <section>
              <MarkersMovie value="Drama"/>
              <MarkersMovie isNew placeholder="Novo marcador"/>
            </section>
          </div>
          <div className='buttons'>
            <Button isBlack title="Excluir filme"/>
            <Button title="Salvar alterações"/>
          </div>

        </form>
        
      </Content>
    </ContainerCreate>
  ) 
}  
