import React from 'react';
import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  handler: (event: any) => void;
  text: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'primary' | 'secondary';
}

const Button = ({
  handler,
  text,
  type = 'button',
  disabled,
  variant = 'primary',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <div className="ButtonContainer">
      <button
        onClick={handler}
        className={`button ${variant} ${className}`.trim()}
        type={type}
        disabled={disabled}
        {...props}>
        {text}
      </button>
    </div>
  );
};

export default Button;
