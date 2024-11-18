import React from 'react'
import { useDeta } from './Context/ShareDeta'

const Flink = ({ item, index }) => {
    return (
        
        <ul className="flex w-4/12 h-max  " key={index}>
  <li className="items-center px-3 py-1 text-2xl ">
    {item.title}
    {item.subtitle?.length > 0 && (
      <ul className="left-0 w-full h-max  text-base mt-5">
        {item.subtitle.map((subItem, subIndex) => (
          <li
            key={subIndex}
            className=" py-1 w-full "
          >
            {subItem.subt}
          </li>
        ))}
      </ul>
    )}
  </li>
</ul>

      
      
    );
  };

const Footer = () => {
    const { logoo, flink}= useDeta()
  return (
    <div className='w-full  text-zinc-800 '>
        <div className='w-90 m-auto flex py-5'>
            <div className='w-4/12 h-max'>
            {logoo.map((item)=>(
                <img className=' w-[75%] h-12' src={item.image} alt='footer Logo0'/>
            ))}

            </div>
            <div className='w-8/12 flex h-max  justify-center gap-2'>
            {flink.map((items, index) => (
          <Flink item={items} index={index} key={index} />
        ))}

            </div>
           


        </div>

        <div className='w-full py-3  text-zinc-700 bg-color1 shadow-inner shadow-zinc-400'>
            <p className='text-center'> © 2024. All right ® reserved by eMythMakers</p>

        </div>
      
    </div>
  )
}

export default Footer
