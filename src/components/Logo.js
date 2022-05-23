import React from 'react'
import Hestia from "./Hestia.png";

const Logo = () => {

    const imageURL = Hestia;

  return (
    <div className='logo'>
    <img style={{ width: "50px", height: "50px" }} src={imageURL} alt="logofornow" />
    </div>
  )
}

export default Logo;