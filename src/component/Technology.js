import React from 'react'

import { useDeta } from '../Context/ShareDeta';


const TechnoCo = ({ item, index }) => {
    return (
      <div key={index} className="w-full h-38 text-zinc-800 transfrom scale-75 text-xl">
        <div className='w-full h-3/5 flex items-center justify-center'> 
        <img src={item.image} alt={item.title} className="w-full h-auto " />
        </div>
        <p className="text-center mt-5 ">{item.title}</p>
      </div>
    );
  };

const Technology = () => {
const {technoly} = useDeta()

  return (
    <div className='w-full h-max py-2 bg-color1 font-mono'>
        <div className='w-90 m-auto'>
        <p className='text-2xl text-center py-5 uppercase '> Technologies We Use</p>
      <div className='w-full grid grid-cols-9 grid-rows-2'>
      {technoly.map((item, index) => (
        <TechnoCo item={item} index={index} key={index} />
      ))}
      </div>
      </div>
    </div>
  )
}

export default Technology
