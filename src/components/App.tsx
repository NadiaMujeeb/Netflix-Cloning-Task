import React from 'react';
import Header from './Header';
import Dropdown from './DropdownNav';
import SliderSection  from './SliderSection';
import FeaturesSection from './FeatureSection';
import FAQSection from './FAQSection';
import Footer from './Footer';



const App: React.FC = () => {
  return (<>
  <div className="bg-black min-h-screen overflow-hidden ">
      <Header />
      <SliderSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />

   <div className='lg:mx-[105px] mb-8 px-3 sm:px-4
      text-sm sm:text-base'> <Dropdown /> </div>
     <div>    <p className='text-white px-3 sm:px-4
      text-sm sm:text-base lg:mx-[105px] mb-28'>Netflix India</p>      </div>
 

</div>
</>
  );
};

export default App;

