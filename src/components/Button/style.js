import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  height:48px;
  border: 0;
  border-radius: 10px;
  background-color: ${({ isBlack, theme }) => isBlack ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ isBlack, theme }) => isBlack ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_800};
  padding: 13px 32px ;
  text-align: center;
  display: flex;
  align-items: center;
  gap:8px;
  margin-top: 16px;
  >svg{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  

  &:disabled {
    opacity: 0.5;
  }

`