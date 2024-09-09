import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <div className=" relative bg-gradient-to-r from-purple-900 to-blue-950 px-4 pt-3 pb-12 rounded-2xl flex justify-between items-center text-white mb-4 w-[400px] h-[280px] m-1">
      <div>
        <h3 className="text-xl font-bold mb-2 ">{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <img src={icon} alt={title} className="w-15 h-11 absolute bottom-0 right-0 mr-6 mb-6" />
      </div>
    </div>
  );
};

export default FeatureItem;
