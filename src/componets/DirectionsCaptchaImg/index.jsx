import React from 'react'

export const DirectionsCaptchaImg = (props) => {
  return (
    <div>
      <button onClick={props.refresh}>Refresh Captcha</button>
      <button>Try with Aritmetics</button>

    </div>
  )
}
