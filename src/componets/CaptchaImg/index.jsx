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
    state: '',
  })
  useEffect(() => {
    fetchData()
  }, [])


  // Get the data from the captcha, & add selected attribute
  async function fetchData() {
    setCaptionMessage({ message: '', state: '' })
    // const { images, category } = await imagesObject()
    const newData = await imagesObject()
    // console.log(newData)
    const imagesPlusSelected = await newData.images.map(data => ({ selected: false, ...data }))
    await setFetchedData({ category: newData.category, images: imagesPlusSelected })
  }

  // Check if it is a valid combination
  const handlerSubmit = (e) => {
    e.preventDefault()
    const selected = fetchedData.images.filter(({ selected }) => selected)
    console.log(fetchedData.images)
    // Less than 4 are very few
    if (selected.length < 4) return setCaptionMessage({ state: "warn", message: "Very few, select more" })
    const verificationPassed = selected.some(({ category }) => {
      return category !== fetchedData.category
    })
    // perfect ? congrats : another captcha
    !!verificationPassed ? fetchData() : setCaptionMessage({ state: "success", message: "Correct!!" })
  }

  // Add and remove positions in array
  const toggleSelect = ({ url }) => {
    setCaptionMessage({ message: '', state: '' })
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
        {captionMessage.message && <Caption message={captionMessage.message} state={captionMessage.state} />}
        <ContainerCube images={fetchedData.images}>
          {fetchedData.images?.map((image, id) =>
            <CubeImg
              key={id}
              {...image}
              toggleSelect={toggleSelect}
            />
          )}
        </ContainerCube>
        <input type="submit" value="Verify Captcha" />
      </form>

      <DirectionsCaptchaImg refresh={fetchData} />
    </StyledCaptchaImg>
  )
}//rafc
