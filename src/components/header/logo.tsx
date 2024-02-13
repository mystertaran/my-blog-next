import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../files/img/dev.png";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image src={logoImg} alt="devTaran logo" className="h-auto w-full" />
      </div>
    </Link>
  );
};

export default Logo;
