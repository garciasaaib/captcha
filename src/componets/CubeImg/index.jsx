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
    background-blend-mode: ${(props) => props.selected !== "selected" ? `normal` : `darken` };
    width: 100%;
    height: 100%;
    display: flex;
  }
  .checkbox {
    position: absolute;
    display: none;
  }

`;
export const CubeImg = ({ url, category, toggleSelect }) => {
  const [selected, setSelected] = useState(false)
  // console.log(url, category)
  const handlerSelect = (e) => {
    // console.log(e)
    setSelected(!selected)
    toggleSelect({category,url})
  }
  return (
    <StyledCubeImg 
      // className={`${selected ?`selected`: ""}`} 
      url={url}
      selected={selected ?`selected`: "unselected"}
      >
      <input className="checkbox" type="checkbox" id={url} value="second_checkbox" />
      <label onClick={handlerSelect} htmlFor={url}></label>
    </StyledCubeImg>
  )
}
