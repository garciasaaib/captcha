import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { ContainerCube } from '../ContainerCube'
import { CubeImg } from '../CubeImg'
import { DirectionsCaptchaImg } from '../DirectionsCaptchaImg'
import { Caption } from '../Caption'
import imagesObject from "../../helpers/data";
const StyledCaptchaImg = styled.div`
  width: 100%;
  max-width: 500px;
  border-radius: 4px;
  border: 1px solid white;
`;
export const CaptchaImg = () => {
  // Init fetched data
  const [fetchedData, setFetchedData] = useState({
    category: "",
    images: []
  })
  const [captionMessage, setCaptionMessage] = useState({
    message: '',
    state: ''
  })
  useEffect(() => {
    fetchData()
  }, [])

  // Get the data from the captcha, & add selected attribute
  async function fetchData() {
    setCaptionMessage('')
    const { images, category } = await imagesObject()
    const imagesPlusSelected = images.map(data => ({ selected: false, ...data }))
    setFetchedData({ category, images: imagesPlusSelected })
  }

  // Check if it is a valid combination
  const handlerSubmit = (e) => {
    e.preventDefault()
    const selected = fetchedData.images.filter(({selected}) => selected)
    console.log(fetchedData.images)
    // Less than 4 are very few
    if (selected.length < 4) return setCaptionMessage({message: "Very few, select more"})
    const verificationPassed = selected.some(({category}) => {
      return category !== fetchedData.category
    })
    // perfect ? congrats : another captcha
    !!verificationPassed ? fetchData() : setCaptionMessage({message: "Correct!!"})
  }

  // Add and remove positions in array
  const toggleSelect = ({url}) => {
    setCaptionMessage('')
    const afterSelection = fetchedData.images.map(row => {
      if (row.url !== url) return row
      else return { ...row, selected: !row.selected }
    })
    setFetchedData({ ...fetchedData, images: afterSelection });
  }

  return (
    <StyledCaptchaImg>
      <h1>Select all the <u>{fetchedData.category}</u> pictures</h1>
      <form onSubmit={handlerSubmit}>
        {captionMessage.message && <Caption message={captionMessage.message}/>}
        <ContainerCube images={fetchedData.images}>
          {fetchedData.images?.map((image, id) =>
            <CubeImg
              key={id}
              {...image}
              toggleSelect={toggleSelect}
            />
          )}
        </ContainerCube>
        <input type="submit" value="Send Response" />
      </form>

      <DirectionsCaptchaImg refresh={fetchData} />
    </StyledCaptchaImg>
  )
}//rafc
