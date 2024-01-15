import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi'

import { useState } from 'react';

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import {api} from '../../services/api'

import{useAuth} from '../../hooks/auth'

import { ContainerProfile,Form,Avatar } from "./style";
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

export function Profile(){
  
  const {user,updateProfile}=useAuth();

  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [passwordOld,setPasswordOld] = useState();
  const [passwordNew,setPasswordNew] = useState();
 
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceHolder
  
  const [avatar,setAvatar] = useState(avatarUrl);
  const [avatarFile,setAvatarFile] = useState(null);


  async function handleUpdate(){
    const user = {
      name,
      email,
      newPassword:passwordNew,
      oldPassword:passwordOld
    }

    await updateProfile({user,avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  return(
    <ContainerProfile>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar"/>

      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e=>setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
         <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={e=>setPasswordOld(e.target.value)}
        />
         <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e=>setPasswordNew(e.target.value)}
        />
        <Button onClick={handleUpdate} title="Salvar"/>
      </Form>

      
    </ContainerProfile>
  )
}