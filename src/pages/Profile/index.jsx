import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi'



import { ContainerProfile,Form,Avatar } from "./style";
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

export function Profile(){
  return(
    <ContainerProfile>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar"/>

      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/xandguima.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          placeholder="Alexandre Guimarães"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="xan.96@hotmail.com"
          type="text"
          icon={FiMail}
        />
         <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
        />
         <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar"/>
      </Form>

      
    </ContainerProfile>
  )
}