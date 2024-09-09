import React from 'react';
import FeatureItem from './FeatureItem';
import profile from "../assets/profile__logo.png"
const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-black p-8  mx-[120px] ">
      <h2 className="text-white text-2xl mb-8 font-bold ">More reasons to join</h2>
     <div className='flex'> 
        <FeatureItem
        title="Enjoy on your TV"
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        icon={profile} 
      />
      <FeatureItem
        title="Download your shows to watch offline"
        description="Save your favorites easily and always have something to watch."
        icon={profile} 
      />
      <FeatureItem
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        icon={profile}  
      />
      <FeatureItem
        title="Create profiles for kids"
        description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
        icon={profile} 
      />
  </div>
    </div>
  );
};

export default FeaturesSection;
