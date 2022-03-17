import React from 'react'

export const DirectionsCaptchaImg = ({refresh, setcaptchaNumber }) => {
  return (
    <div>
      <button onClick={refresh}>Refresh Captcha</button>
      <button onClick={()=>setcaptchaNumber(1)}>Try with Aritmetics</button>

    </div>
  )
}
