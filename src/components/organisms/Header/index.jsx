import Button from "../../atoms/Button";

const Header = () => {
  return (
    <header className="header">
      <span>logo</span>
      <div className="header-links">
        <span>About</span>
        <span>Contact</span>
        <Button typeButton="secondary">Login</Button>
        <Button typeButton="secondary">Register</Button>
      </div>
    </header>
  );
};

export default Header;
