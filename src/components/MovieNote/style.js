import styled from "styled-components";

export const ContainerMovie=styled.button`
  position: relative;
  width:100%;
  border:none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  border-radius: 10px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 32px;

  display: flex;
  align-items: flex-start;
  gap:15px;

  >header{
    >h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
      font-family: 'Roboto Slab', serif;
    }
    >div{
      display: flex;
      flex-direction: row;
      gap:6px;
    }
  }
  >p{
    width: 100%;
    height: 52px;
   
    align-self: stretch;
    text-align: left;
    overflow: hidden;
    color: var(--Gray, #999591);
    text-overflow: ellipsis;
    white-space:normal;
    font-family: 'Roboto',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }

  >.delete{
    position: absolute;
    right: 20px;
  
  }
  
`