import {api} from '../services/api';
import { createContext,useContext,useEffect,useState} from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data,setData]=useState({});

  async function signIn({email,password}){
    try{
      const response = await api.post("/sessions",{email,password});
      
      const {user,token}=response.data

      localStorage.setItem("@rocketMovies:user",JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token",token);

      api.defaults.headers.common['Authorization'] =`Bearer ${token}`;
      setData({user,token})

    } catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possivel entrar")
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@rocketMovies:user");
    localStorage.removeItem("@rocketMovies:token");
    setData({});
  }

  async function updateProfile({user,avatarFile}){
    try{

      if(avatarFile){
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar",avatarFile);
        
        const response = await api.patch("/users/avatar",fileUploadForm);
        user.avatar_url = response.data.avatar_url;
      }
      
      await api.put("/users",user);

      localStorage.setItem("@rocketMovies:user",JSON.stringify(user));

      setData({user,token:data.token});

      alert("Perfil atualizado com sucesso")

    }catch(error){
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketMovies:user");
    const token = localStorage.getItem("@rocketMovies:token");

    if(token && user){
      api.defaults.headers.common['Authorization'] =`Bearer ${token}`;
      setData({
        user:JSON.parse(user),
        token
      })
    }
  }, [])
  return(
    <AuthContext.Provider value={{signIn, user:data.user,signOut,updateProfile}}>
      {children}
    </AuthContext.Provider>
  ) 
}

function useAuth() {
  const context = useContext(AuthContext);
  
  return context;
}
export {AuthProvider, useAuth}