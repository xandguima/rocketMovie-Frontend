import styled from "styled-components";

import { Link } from 'react-router-dom';

export const ContainerHeader = styled.header`
  width: 100%;
  height: 116px;
  padding:24px 123px;
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:64px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDERLINE};
  >h1{
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }
`
export const Profile=styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  >img{
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  >div{
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 14px;
    >strong{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    >a{
      color: ${({ theme }) => theme.COLORS.GRAY_200};  
    }

  }
`