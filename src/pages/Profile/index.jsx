import { useState } from 'react';
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'
import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import { useNavigate } from 'react-router-dom';
import {ButtonText} from "../../components/ButtonText"
import { ContainerProfile,Form,Avatar } from "./style";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi'


export function Profile(){
  const navigate=useNavigate();

  const {user,updateProfile}=useAuth();

  const [name,setName] = useState(user.name);
  const [email,setEmail] = useState(user.email);
  const [passwordOld,setPasswordOld] = useState();
  const [passwordNew,setPasswordNew] = useState();
 
  const avatarUrl = user.avatar_url ? `${api.defaults.baseURL}/files/${user.avatar_url}` : avatarPlaceHolder

  const [avatar,setAvatar] = useState(avatarUrl);
  const [avatarFile,setAvatarFile] = useState(null);


  async function handleUpdate(){
    const updated = {
      name,
      email,
      newPassword:passwordNew,
      oldPassword:passwordOld
    };
    const userUpdated= Object.assign(user, updated)

    await updateProfile({user:userUpdated,avatarFile})
    navigate('/')
  }

  function handleChangeAvatar(event){
    
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }
  function handleBack(){
    navigate(-1);
  }

  return(
    <ContainerProfile>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack}/>

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