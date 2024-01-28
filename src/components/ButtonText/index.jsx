import {ContainerButtonText} from './style'

export function ButtonText({title,icon: Icon, ...rest}){
  return(
    <ContainerButtonText {...rest }>
      {Icon && <Icon size={20}/>}
      {title}
    </ContainerButtonText>
  )
}