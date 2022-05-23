import React from "react";

const Button = ({ text, link }) => {
  return (
    <div className="Btn">
    <a href={link} aria-label={text} target="_blank" rel="noreferrer">
      {text}
    </a>
    </div>
  );
};

export default Button;
