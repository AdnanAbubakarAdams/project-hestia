import React from "react";

const Button = ({ text, link }) => {
  return (
    <div className="Btn">
    <a className="a" href={link}  target="_blank" rel="noreferrer">
      Connect Wallet
    </a>
    </div>
  );
};

export default Button;
