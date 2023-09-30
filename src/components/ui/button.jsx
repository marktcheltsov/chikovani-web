import React from 'react';
import '../../styles/components/ui/button.css';

const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <button
      className={`button ${disabled ? 'disabled' : ''} ${props.castomClassName && props.castomClassName}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;