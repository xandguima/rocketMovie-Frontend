import {ContainerButton} from './style';

export function Button({isBlack,title,icon: Icon,loading=false,...rest}){
  return(
    <ContainerButton
      type="button"
      disabled={loading}
      isBlack={isBlack}
      {...rest}
      
    >
      {Icon && <Icon size={20}/>}
      {loading ? 'Carregando...' : title}
    </ContainerButton>
  )
}