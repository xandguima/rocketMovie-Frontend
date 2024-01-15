import { useState } from "react";
import { FiMail,FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";


import { ContainerSignIn,Form,Background } from "./style";
import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import {Button} from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email,password});
  }

  return (
    <ContainerSignIn>
      <Form>
        <h1>RocketMovie</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input type="text"
        icon={FiMail}
        placeholder="E-mail"
        onChange={e=>setEmail(e.target.value)}/>

        <Input type="password"
        icon={FiLock}
        placeholder="Senha"
        onChange={e=>setPassword(e.target.value)}/>

        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to='/register'>
          Criar conta
        </Link>
       
      </Form>
      <Background/>
      
      
    </ContainerSignIn>
  )
}