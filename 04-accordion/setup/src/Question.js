import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({id,title,info}) => {
  const [isShowInfo,setIsShowInfo] = useState(false);
  return (
      <div className='question'>
        <p>
          <h4 className='header'>
            {title}
            <button className='btn' onClick={() => {
              setIsShowInfo(!isShowInfo)
            }}>
              { isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus/>}
            </button>
          </h4>
        </p>
        <p>{isShowInfo ? info : ""}</p>
      </div>
  )
};

export default Question;
