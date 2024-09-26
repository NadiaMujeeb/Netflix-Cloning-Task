import React from 'react';
import FeatureItem from './FeatureItem';
import profile from "../assets/profile__logo.png";

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-black p-4 sm:p-8 lg:mx-[120px] mb-8">
      <h2 className="text-white text-lg sm:text-2xl mb-4 sm:mb-8 font-bold">
      शामिल होने की ज़्यादा वजहें
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureItem
          title="अपने टीवी पर आनंद लें"
          description="स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें."
          icon={profile} 
        />
        <FeatureItem
          title="ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"
          description="अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."
          icon={profile} 
        />
        <FeatureItem
          title="हर जगह देखें"
          description="बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."
          icon={profile}  
        />
        <FeatureItem
          title="बच्चों के लिए प्रोफ़ाइल बनाएं"
          description="बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."
          icon={profile} 
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
