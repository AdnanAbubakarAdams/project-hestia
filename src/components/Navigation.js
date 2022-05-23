import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navigation = () => {
  return (
    <section>
      <div className="Nav">
        <Logo />
        <ul className="Menu">
          <li>Home</li>
          <li>Roadmap</li>
          <li>About</li>
          <li>Showcase</li>
          <li>Team</li>
          <li>Faq</li>
        </ul>
        <Button text="Connect Wallet" link="" />
      </div>
    </section>
  );
};

export default Navigation;
