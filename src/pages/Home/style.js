import CustomScroll from "react-custom-scroll";
import styled from "styled-components";


export const ContainerHome=styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
  display: grid;
  grid-template-rows:116px 133px auto;
  grid-template-areas: 
  "header"
  "content"
  "listMovies";

`
export const Content=styled.div`
  grid-area: content;
  margin-bottom:38px;
  padding: 50px 123px 0;
  >header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    
    h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
    }
  }
  
  
`
export const ListMovies=styled.div`
  grid-area: listMovies ;
  padding: 0  123px;
  width:100%; 
  
  >.movies {
    padding:10px;
    overflow-y: auto;
    height:550px;
    &::-webkit-scrollbar {
      width: 8px; 
    }

    &::-webkit-scrollbar-track {
    background: ${({theme})=>theme.COLORS.BACKGROUND_800};
    }

    &::-webkit-scrollbar-thumb {
      background:${({theme})=>theme.COLORS.PINK};
      border-radius: 5px;
     
      
    }
    
  }


  

 
  
 
`
