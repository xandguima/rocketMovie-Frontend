import styled from "styled-components";
import starNotFilled from "../../assets/star.svg";
import starFilled from "../../assets/starIsFilled.svg";

export const ContainerStar = styled.div`
  width:12px;
  height: 12px;
  display: flex;
  gap: 6px;

  >div{
    width: 100%;
  }
  .filled{
    background-image: url(${starFilled});
  }
  .notFilled{
    background-image: url(${starNotFilled});
  }
`