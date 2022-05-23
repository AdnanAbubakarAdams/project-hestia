import React from "react";
import Logo from "./Logo";

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
        <h2>Button</h2>
      </div>
    </section>
  );
};

export default Navigation;
