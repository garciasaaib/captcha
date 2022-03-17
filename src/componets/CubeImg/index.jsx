import styled from 'styled-components';
const StyledCubeImg = styled.div`
  background: #3b888844;
  width: 150px;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;

  img {
    /* background-image: ${(props) => props.url ? `url(${props.url})` : 'none'}; */
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #aa2b2b58;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }
  .selected {
    ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: teal ;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1000;
  }
  }
  .checkbox {
    position: absolute;
    display: none;
  }

`;
export const CubeImg = ({ url, selected, toggleSelect }) => {
  const handlerSelect = (e) => {
    toggleSelect({ url })
  }
  return (
    <StyledCubeImg
      url={url}
      className={`${selected ? `selected` : ""}`}
    // {...selected}
    >
      {/* <input className="checkbox" type="checkbox" id={url} value="second_checkbox" /> */}
      <img
        src={url}
        onClick={handlerSelect}
        alt={url}
      />
    </StyledCubeImg>
  )
}
