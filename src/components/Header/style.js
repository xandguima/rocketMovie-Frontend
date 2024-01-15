import styled from "styled-components";


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
export const Profile=styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  >#linkImg img{
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
    >#linkStrong strong{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    >a{
      color: ${({ theme }) => theme.COLORS.GRAY_200};  
    }

  }
`