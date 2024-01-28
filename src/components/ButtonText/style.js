import styled from "styled-components";

export const ContainerButtonText = styled.button`
  display:flex;
  gap:8px;
  align-items: center;

  margin-bottom:24px;
  background: none;
  color: ${({theme})=> theme.COLORS.PINK};
  border: none;
  font-size: 16px;
`