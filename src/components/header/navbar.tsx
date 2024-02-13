import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <nav
      className="fixed right-1/2 top-12 flex w-max translate-x-1/2 
        items-center rounded-full border border-solid border-gray bg-light/80 px-8 py-3 font-medium capitalize
        shadow-md backdrop-blur-sm"
    >
      <Link href="/" className="mr-2">
        Home
      </Link>
      <Link href="/about" className="mr-2">
        About
      </Link>
      <Link href="/contact" className="mr-2">
        Contact
      </Link>
      <button><MdDarkMode size={18} /></button>
    </nav>
  );
};

export default Navbar;
