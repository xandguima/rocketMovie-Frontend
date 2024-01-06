import styled from "styled-components";

export const ContainerInput = styled.div`
   width: 100%;
  
   display: flex;
   align-items: center;
   
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
   color: ${({ theme }) => theme.COLORS.GRAY_200};
   
   border-radius: 10px;
   margin-bottom: 8px;
   >svg{
      margin-left:12px;
   }
   >input{
    height: 56px;
    width: 100%;
    padding: 19px 24px;
    border: 0;
    
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: transparent;
    
   }
   >input:focus{
     outline:none;
   }
  
`