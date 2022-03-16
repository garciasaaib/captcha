import React, { useState } from 'react'
import styled from 'styled-components';
const StyledCubeImg = styled.div`
  background: teal;
  width: 150px;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  label {
    background-image: ${(props) => props.url ? `url(${props.url})` : 'none'};
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #aa2b2b58;
    width: 100%;
    height: 100%;
    display: flex;
  }
  input[type="checkbox"] {
    position: absolute;
  }
`;
export const CubeImg = ({ url, category, toggleSelect }) => {
  // const [selected, setSelected] = useState(false)
  console.log(url, category)
  const handlerSelect = (e) => {
    console.log(e.parent)
    toggleSelect({url,category})
  }
  return (
    <StyledCubeImg onClick={handlerSelect} url={url}>
      <input type="checkbox" id={url} value="second_checkbox" />
      <label for={url}></label>
    </StyledCubeImg>
  )
}
