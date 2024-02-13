import Link from "next/link"
import Image from "next/image"
import logoImg from "../../../files/img/dev.png"

const Logo = () => {
  return (
    <Link href='/'>
      <div>
        <Image src={logoImg} alt="devTaran logo" className="w-full h-auto"/>
      </div>
    </Link>
  )
}

export default Logo
