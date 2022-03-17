import styled from 'styled-components';
const StyledCubeImg = styled.div`
  background: #3b888844;
  width: 150px;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  display: flex;


  img {
    /* background-image: ${(props) => props.url ? `url(${props.url})` : 'none'}; */
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #aa2b2b58;
    width: 100%;
    height: 100%;
    margin:auto;
    &.selected {
      width: 90%;
      height: 90%;

    }
  }

`;
export const CubeImg = ({ url, selected, toggleSelect }) => {
  const handlerSelect = (e) => {
    toggleSelect({ url })
  }
  return (
    <StyledCubeImg
      url={url}
      // {...selected}
      >
      {/* <input className="checkbox" type="checkbox" id={url} value="second_checkbox" /> */}
      <img
        className={`${selected ? `selected` : ""}`}
        src={url}
        onClick={handlerSelect}
        alt={url}
      />
    </StyledCubeImg>
  )
}
