import { FiMail,FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ContainerSignIn,Form,Background } from "./style";

import { Input } from "../../components/Input";
import {Button} from "../../components/Button";

export function SignIn() {

  return (
    <ContainerSignIn>
      <Form>
        <h1>RocketMovie</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input type="text"icon={FiMail}placeholder="E-mail"/>
        <Input type="password"icon={FiLock}placeholder="Senha"/>
        <Button title="Entrar"/>
        <Link to='/register'>
          Criar conta
        </Link>
       
      </Form>
      <Background/>
      
      
    </ContainerSignIn>
  )
}