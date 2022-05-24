import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navigation = () => {
  return (
    <section>
      <div className="Nav">
        <Logo />
        {/* <ul className="Menu"> */}
          <button className="one">Home</button>
          <button className="one">Roadmap</button>
          <button className="one">About</button>
          <button className="one">Showcase</button>
          <button className="one">Team</button>
          <button className="one">Faq</button> 
        {/* {/* </ul> */}
        <Button text="Connect Wallet" link="" />
      </div>
    </section>
  );
};

export default Navigation;
