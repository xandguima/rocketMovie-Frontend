import{SignIn} from '../pages/SignIn'
import{ SignUp } from '../pages/SignUp'
import {Routes, Route,Navigate} from 'react-router-dom'

export function AuthRoutes(){
  const user = localStorage.getItem("@rocketMovies:user");
  return(
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>

      {!user && <Route path='*' element={<Navigate to='/'/>}/>}
    </Routes>
  )
}
