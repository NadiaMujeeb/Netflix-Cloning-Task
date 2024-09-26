import React from 'react';
import Header from '../comp-hindi/Header';
import DropdownNav from '../comp-hindi/DropdownNav';
import SliderSection from '../comp-hindi/SliderSection';
import FeaturesSection from '../comp-hindi/FeatureSection';
import FAQSection from '../comp-hindi/FAQSection';
import Footer from '../comp-hindi/Footer';
import 'primereact/resources/themes/saga-blue/theme.css'; // Change to your preferred theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';




const App: React.FC = () => {
  return (<>
  <div className="bg-black min-h-screen overflow-hidden ">
      <Header />
      <SliderSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />

   <div className='lg:mx-[120px] sm:mx-[120px] mb-8 px-3 sm:px-4
      text-sm sm:text-base'> <DropdownNav /> </div>
     <div>    <p className='text-white px-3 sm:px-4
      text-sm sm:text-base lg:mx-[120px] sm:mx-[120px] mb-28'>Netflix भारत</p>      </div>
 

</div>
</>
  );
};

export default App;



