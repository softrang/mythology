import React from 'react';
import { useDeta } from '../Context/ShareDeta';

const ServiceCo = ({ item, index }) => {
  return (
    <div key={index} className="w-full h-52 border-b border-zinc-300">
      <img src={item.image} alt={item.title} className="w-full h-3/4 " />
      <p className="text-center mt-2 text-lg">{item.title}</p>
    </div>
  );
};

const Services = () => {
  const { serviceco } = useDeta();

  return (
    <div className='w-90 m-auto font-mono text-zinc-800 py-5'>
        <p className='text-2xl text-center py-5 uppercase '> Our Services</p>
    <div className="w-full h-max grid grid-cols-5 grid-rows-2 gap-4">
      {serviceco.map((item, index) => (
        <ServiceCo item={item} index={index} key={index} />
      ))}
    </div>
    </div>
  );
};

export default Services;
