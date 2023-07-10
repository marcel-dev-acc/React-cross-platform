import React from 'react';
import './Button.css';

interface ButtonProps {
  handler: (event: any) => void;
  text: string;
}

const Button = ({handler, text}: ButtonProps): JSX.Element => {
  return (
    <div className="ButtonContainer">
      <button onClick={handler}>{text}</button>
    </div>
  );
};

export default Button;
