import React from 'react'
import { useDeta } from './Context/ShareDeta'
import { IoMdArrowDropdown } from "react-icons/io";
import Logo from './image/logo.png'

const Menu = ({ item, index }) => {
    return (
        
        <ul className="w-max flex text-zinc-800 text-lg" key={index}>
        <li className="group relative  flex  items-center px-3 py-2 border-t hover:text-zinc-700 hover:border-t hover:border-zinc-300 border-white">
          {item.menu}
          {/* Render submenu only if it exists */}
          {item.submenu && item.submenu.length > 0 && (
            <> 
            <IoMdArrowDropdown  className='block ml-2'/>
            <ul className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg">
              {item.submenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className="px-4 py-2 hover:bg-gray-200 hover:text-zinc-800"
                >
                  {subItem.sub}
                </li>
              ))}
            </ul>
            </>
          )}
        </li>
      </ul>
      
      
    );
  };

const Heder = () => {
    const {heder} = useDeta()
  return (
    <div className='w-full  shadow-md shadow-zinc-400 sticky top-0 z-50 backdrop-blur-lg bg-white '> 
    <div className="w-90 m-auto  py-5 px-2 flex ">
      <div className="w-3/12 h-12 ">
      <img className='h-full m-auto w-full ' src={Logo} alt='Logo'/>
      
      </div>
      <div className="w-9/12 h-max flex justify-end">
        {heder.map((items, index) => (
          <Menu item={items} index={index} key={index} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Heder
