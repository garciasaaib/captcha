import React from 'react'
import styled from 'styled-components';
const StyledContainerCube = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  margin: auto 0;
  justify-content: center;
  align-items: center;

`;
export const ContainerCube = ({children}) => {
  return (
    <StyledContainerCube>{children}</StyledContainerCube>
  )
}
