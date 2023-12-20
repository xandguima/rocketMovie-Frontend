import styled from "styled-components";

export const ContainerCreate=styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
  display: grid;
  grid-template-rows:116px auto;
  grid-template-areas: 
  "header"
  "content"
;
`

export const Content=styled.div`
  grid-area: content;
  padding: 40px 123px 0;
  >form{
    
    padding:0 3px;
    overflow-y:auto;
    height: 550px;
    display:flex;
    flex-direction: column;
    gap: 40px;
    >h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    >section{
      display:flex;
      justify-content: space-between;
      gap: 40px;
    }
    
    >.markers{
      >h3{
        margin-bottom: 24px;
      }
      >section{
        padding:16px;
        border-radius: 8px;
        background:${({theme})=>theme.COLORS.BACKGROUND_900};
        display:flex;
        align-items: center;
        gap:24px;
      }
    }
    >.buttons{
      display:flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 3px;
    }
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