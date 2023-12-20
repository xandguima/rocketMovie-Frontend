import { FiUser,FiMail,FiLock,FiArrowLeft } from "react-icons/fi";

import {Link} from 'react-router-dom'

import { ContainerSignUp,Form,Background } from "./style";

import { Input } from "../../components/Input";
import {Button} from "../../components/Button";

export function SignUp() {

  return (
    <ContainerSignUp>
      <Background/>
      <Form>
        <h1>RocketMovie</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input type="text"icon={FiUser}placeholder="Nome"/>
        <Input type="text"icon={FiMail}placeholder="E-mail"/>
        <Input type="password"icon={FiLock}placeholder="Senha"/>

        <Button title="Entrar"/>
        <Link to='/' >
          Voltar para o login
        </Link>
        
      </Form>
      
      
      
    </ContainerSignUp>
  )
}