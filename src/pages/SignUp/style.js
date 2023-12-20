import styled from "styled-components";  

import backgroundImg from "../../assets/background.png"

export const ContainerSignUp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  
`
export const Form=styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

  padding: 0 134px;
  >h1{
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  >p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
  }
  >h2{
    margin:48px 0;
    
    align-items: inherit;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  >a{
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: center;
    margin-top: 42px;
    font-size: 16px;
    font-weight: 400;
  }
`
export const Background=styled.div`
 flex:1;
  background: url(${backgroundImg})no-repeat center;
  background-size: cover;
  opacity: .3;
`


