import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor,  }) => {
  const [isAlert,setIsAlert] = useState(false);
  const bcg = rgb.join(',');
  // const hex = rgbToHex(...rgb); // this alrady has prefix #, hexColor has no # as prefix.
  const hexValue = `#${hexColor}`
  // console.log(hexValue)
  // console.log(bcg)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [isAlert])
  const divinderIndex = (20);
  // console.log(divinderIndex)
  return (
    <article className={`color ${index > divinderIndex  && 'color-light'}`} 
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={() => {
        setIsAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}>
      <p className='percent-value'>
        {weight}%
      </p>
      <p className='color-value'>{hexValue}</p>
      {/* if alert is true, then do make <p>-tag */}
      {isAlert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
