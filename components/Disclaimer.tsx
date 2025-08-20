
import React from 'react';
import { useState } from 'react';

const Disclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 relative" role="alert">
      <div className="flex">
        <div className="py-1"><svg className="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z"/></svg></div>
        <div>
          <p className="font-bold">Design-Vorschlag & Prototyp</p>
          <p className="text-sm">
            Dies ist ein interaktiver Design-Prototyp, erstellt in React.js, um das Look & Feel der neuen Website zu demonstrieren. Er dient als visuelle Vorlage und Konzept für die finale Umsetzung in WordPress mit Elementor.
          </p>
        </div>
        <button onClick={() => setIsVisible(false)} className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6 text-yellow-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Disclaimer;
