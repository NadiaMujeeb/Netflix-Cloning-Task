import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Netflix क्या है?",
      answer: `Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं. आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!!`,
    },
    {
      question: "Netflix की कीमत कितनी है?",
      answer: "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं..",
    },
    {
      question: "मैं कहां देख सकता हूं?",
      answer: "कहीं भी, कभी भी देखें. तुरंत देखने के लिए वेब पर netflix.com पर जाकर अपने Netflix अकाउंट से साइन इन करें. आप Netflix ऐप ऑफ़र करने वाले इंटरनेट से जुड़े किसी भी डिवाइस से साइन इन कर सकते हैं जैसे कि आपका पर्सनल कंप्यूटर या स्मार्ट टीवी, स्मार्ट फ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल. आप iOS या Android ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं.",
    },
    {
      question: "मैं कैसे कैंसल करूं?",
      answer: "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
    },
    {
      question: "मैं Netflix पर क्या देख सकता/सकती हूं?",
      answer: "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",
    },
    {
      question: "क्या Netflix बच्चों के लिए ठीक है?",
      answer: "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं. बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="bg-black p-4 sm:p-8 lg:mx-[120px] mb-8">
        <h2 className="text-white text-lg sm:text-2xl mb-4 sm:mb-8 font-bold text-left">
        अक्सर पूछे जाने वाले सवाल
        </h2>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleOpen={() => handleToggle(index)}
          />
        ))}
      </div>

      <div>
        <section className="mb-11 h-full flex flex-col justify-center text-center px-4">
          <p className="text-white text-center text-sm sm:text-xl mb-5">
          देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.
          </p>
          <div className="text-center flex flex-col sm:flex-row items-center justify-center">
            <input 
              type="email" 
              placeholder="ईमेल पता"
              className="p-2 ml-8 mt-8 sm:p-4 h-12 sm:h-16 w-full sm:w-1/2 max-w-md rounded-md mr-2 bg-black border-[1px] border-white mb-2 sm:mb-0"
            />
            <button className="h-12 ml-8 mt-8  sm:h-16 w-36 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm sm:text-xl">
            शुरू करें &gt;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQSection;





