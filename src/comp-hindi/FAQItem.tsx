import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-700 mb-2 ">
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center cursor-pointer p-4 bg-gray-800 h-16 hover:bg-gray-600"
      >
        <h3 className="text-white text-lg">{question}</h3>
        <span className="text-white text-2xl">{isOpen ? '✕' : '＋'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-900 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
