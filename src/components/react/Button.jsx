import React from 'react';

export default function Button({ text, onClick = () => console.log('Button clicked') }) {
  return (
    <button 
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      {text}
    </button>
  );
}