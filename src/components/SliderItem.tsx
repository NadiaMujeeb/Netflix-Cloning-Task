import React from 'react';

interface SliderItemProps {
  title: string;
  num: number;
  icon: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ title, icon, num }) => {
  return (
    <div className="relative flex items-center justify-center p-2">
      <img 
        src={icon} 
        alt={title} 
        className="w-36 h-44 mb-6 rounded-lg 
          sm:w-32 sm:h-48 md:w-44 md:h-60 lg:w-40 lg:h-56 
          xl:w-48 xl:h-72"
      />
      <span 
        className="absolute flex items-center justify-center text-black px-2 py-1 rounded-full font-bold 
          text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
        style={{ 
          top: '55%', 
          left: '-7%', 
          textShadow: '0 0 2px white, 0 0 2px white, 0 0 2px white, 0 0 2px white' 
        }}
      >
        {num}
      </span>
    </div>
  );
};

export default SliderItem;
