// import React from 'react';

// interface FeatureItemProps {
//   title: string;
//   description: string;
//   icon: string;
// }

// const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
//   return (
//     <div className=" relative h-full  flex-col  text-center bg-gradient-to-r from-purple-900 to-blue-950 p-8 pb-16 rounded-2xl flex justify-between items-center text-white mb-4 w-[280px]">
//       <div>
//         <h3 className="text-xl font-bold mb-2 ">{title}</h3>
//         <p>{description}</p>
//       </div>
//       <div>
//         <img src={icon} alt={title} className="w-15 h-11 absolute bottom-0 right-0 mr-6 mb-6" />
//       </div>
//     </div>
//   );
// };

// export default FeatureItem;



import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 to-blue-950 px-4 pt-12 sm:pt-3 pb-28 sm:pb-12 rounded-2xl flex justify-between items-center text-white w-full h-[180px] sm:h-[270px] m-0 sm:m-1 ">
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

