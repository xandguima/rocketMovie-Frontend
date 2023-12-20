import {ContainerStar}from './style'

export function Star({isFilled=false,...rest}){
  return(
    <ContainerStar >
      <div
      className={isFilled? 'filled':'notFilled'}  
      {...rest}
      ></div>
    </ContainerStar>
  )
}