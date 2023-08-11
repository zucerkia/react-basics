import { Button } from "../../atoms";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <span>Logo</span>
      <div className="header-links">
        <span>About</span>
        <span>contact</span>
        <Button typeButton="secondary">Login</Button>
        <Button typeButton="secondary">Register</Button>
      </div>
    </header>
  );
};

export default Header;
