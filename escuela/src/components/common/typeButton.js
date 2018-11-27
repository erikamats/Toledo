import React from "react";

export const TypeButton = ({ text, onClick, type }) => {
  return (
    <button 
    type={type} 
    onClick={onClick} 
    className="btn bg-secondary" >
    {text} 
    </button>
  );
};
export default TypeButton;