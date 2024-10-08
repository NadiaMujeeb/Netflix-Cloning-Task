import React from 'react';
import FeatureItem from './FeatureItem';
import profile from "../assets/profile__logo.png";

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-black p-4 sm:p-8 lg:mx-[120px] mb-8">
      <h2 className="text-white text-lg sm:text-2xl mb-4 sm:mb-8 font-bold">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
          description="Send kids on adventures with their favourite characters in a space made just for them."
          icon={profile} 
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
