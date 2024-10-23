import Image from "next/image";
import Logo from "@/public/blipay-removebg.png";

export default function NavbarComponent() {
  return (
    <nav
      role="navigation"
      aria-label="Navbar"
      className="bg-gray-50 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 h-20 flex"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center p-4">
        <Image src={Logo} alt="Blipay logo" width={140} height={42} priority />
      </div>
    </nav>
  );
}
