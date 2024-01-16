import styled from "styled-components";

export const ContainerMarkersMovie=styled.div`
  display: flex;
  align-items: center;
  gap:16px;
  background-color: ${({theme,isNew})=>isNew ? "transparent":theme.COLORS.BACKGROUND_700};
  color: ${({theme})=>theme.COLORS.GRAY_200};
  border: ${({theme, isNew})=> isNew ? `2px dashed ${theme.COLORS.GRAY_200}`:"none"};
  border-radius:10px;
  padding-right:16px;

  >button{
    border:none;
    background:none;
  }
  .button-delete,.button-add{
    color:${({theme})=>theme.COLORS.PINK}
  }
  
  >input{
    height:56px;
    width:100%;

    padding:16px;

    color:${({theme})=>theme.COLORS.WHITE};
    background:transparent;

    border:none;

    &::placeholder{
      color:${({theme})=>theme.COLORS.GRAY_200};
      border:none;
    }
    &:focus{
      outline:none;
    }
  }
`