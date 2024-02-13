import Logo from "./logo";
import Navbar from "./navbar";
import Socials from "./socials";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between p-4 px-10">
      <Logo />
      <Navbar />
      <Socials />
    </header>
  );
};

export default Header;
