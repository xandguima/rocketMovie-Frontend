import styled from "styled-components";

export const ContainerTag=styled.span`
  width: 100%;
  height: 24px;
  padding: 5px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
  border-radius: 10px;
  color: ${({theme})=>theme.COLORS.WHITE};
  margin-right:8px;
`