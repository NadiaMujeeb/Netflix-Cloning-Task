import React from 'react'

interface SliderItemProps {
    title: string;
    num:number;
    icon: string;
  }
  
  const SliderItem: React.FC<SliderItemProps> = ({ title, icon ,num}) => {
    return (
      <div className="relative ">

       <div className='flex '>
          <img src={icon} alt={title} className="w-44 h-64 mb-6 rounded-lg" />
          <span className="absolute left-[-10%] bottom-9  text-black px-2 py-1 rounded-full text-8xl font-bold" style={{
    textShadow: '0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white'
  }}>{num}</span>
        </div>
      </div>
    );
  };
  
  export default SliderItem;