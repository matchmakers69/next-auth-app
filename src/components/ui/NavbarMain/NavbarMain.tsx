import Header from "./Header";
import { HeaderAuth } from "./HeaderAuth";
import Navigation from "./Navigation";

const NavbarMain = async () => {
  return (
    <Header>
      <div className="right-nav flex items-center">
        <Navigation />
        <HeaderAuth />
      </div>
    </Header>
  );
};

export default NavbarMain;
