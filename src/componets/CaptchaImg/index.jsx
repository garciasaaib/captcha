import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { ContainerCube } from '../ContainerCube'
import { CubeImg } from '../CubeImg'
import { DirectionsCaptchaImg } from '../DirectionsCaptchaImg'
import imagesObject from "../../helpers/data";
const StyledCaptchaImg = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid white;
`;
export const CaptchaImg = () => {
  // Init fetched data and selected images
  const [fetchedData, setFetchedData] = useState(new Array(0))
  const {images, category} = fetchedData
  const [selected, setSelected] = useState(new Array(0))
  useEffect(() => {
    fetchData()
  },[])


  // Get the data from the captcha
  async function fetchData() {
    const newData = await imagesObject()
    setFetchedData(newData)
  }

  // Check if it is a valid combination
  const handlerSubmit = (e) => {
    e.preventDefault()
    // console.log(selected.length)
    console.log(selected)
    // if(selected.length < 4) return alert('Select 4 images at least')
  }

  // Add and remove positions in array
  const toggleSelect = (boxSelected) => {
    const alreadyExist = selected.find((row) => {
      return row.url === boxSelected.url
    })
    if(!alreadyExist) setSelected([...selected,boxSelected])
    else {
      const index = selected.indexOf(alreadyExist)
      const newSelectedState = [...selected]
      newSelectedState.splice(index, 1)
      setSelected(newSelectedState)
    }
    // agrega todo seleccionado

    // !alreadyExist
    //   ? setSelected([...selected,boxSelected])
    //   : console.log("ya existe")
    // console.log(boxSelected)
    // const newSelected = selectedboxSelected)
    // console.log()
  }

  return (
    <StyledCaptchaImg>
      <h1>Select all the {category} pictures</h1>
      <form onSubmit={handlerSubmit}>
        <ContainerCube images={images}>
        {images?.map((image, id) =>
          <CubeImg
            key={id}
            {...image}
            toggleSelect={toggleSelect}
            />
        )}
        </ContainerCube>
        <input type="submit" value="Send Response" />
      </form>

      <DirectionsCaptchaImg refresh={fetchData}/>
    </StyledCaptchaImg>
  )
}//rafc
