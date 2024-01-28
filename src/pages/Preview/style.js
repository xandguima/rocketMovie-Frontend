import styled from "styled-components";


export const ContainerPreview=styled.div`
  width: 100%;
  height: 100vh;
  overflow:hidden;
  display: grid;
  grid-template-rows:116px  auto;
  grid-template-areas: 
  "header"
  "content"
`
;
export const Content=styled.div`
  grid-area: content;
  padding: 40px 123px 0;
  display: flex;
  flex-direction: column;
  
  
  >.noteMovie{
    position: relative;
    padding-right:24px;
    width: 100%;
    height: 500px;
    overflow-y:auto;
    display:flex;
    flex-direction: column;
    gap: 40px;
    
    >header{
    
      >div{
        margin-top: 24px;
        display:flex;
        flex-direction:row;
        align-items:center;
        gap: 20px;
      
        >h1{
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 36px;
          font-weight: 700;
          
        }
        >section{
          display:flex;
          gap:10px;
          
        }
         
      }
    }
    .descriptionAuthor{
      margin-top:24px; 
      display:flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.WHITE };
      font-size: 16px;
      font-weight: 400;
      >svg{
        color: ${({ theme }) => theme.COLORS.PINK };
      }
      >img{
        width:16px;
        height: 16px;
        border-radius: 50%;
      }
    }
   
    .descriptionMovie{
      >p{
        color: ${({ theme }) => theme.COLORS.WHITE };
        text-align: justify;
        font-size: 16px;
        font-weight: 400;
       
      }

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
    >.delete{
    position: absolute;
    right: 20px;
  
    }

    
  }
`