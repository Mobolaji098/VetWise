import Link from "next/link";
import Image from "next/image";
import { ButtonNoOutline, ButtonColored } from "../ui/Button";

export default function Navbar() {
  const menus = [
    { name: "For pet parents", routes: "./" },
    { name: "For vets & nurses", routes: "./" },
    { name: "Shop", routes: "./shop" },
  ];

  return (
    <div className="bg-slate-800 fixed top-0 w-full z-50  ">
      <div className="flex flex-row h-16  m-auto   w-full lg:max-w-[1400px] items-center  max-w-[750px]">
        <div className="flex">
          <div className="flex items-start px-6">
            <Link href="./">
              <Image
                src={"/logo.png"}
                width={200}
                height={200}
                alt="profile picture"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mx-6">
            {menus.map((menu) => {
              return (
                <ButtonNoOutline
                  className={` text-white pl-6 `}
                  as={Link}
                  href={menu.routes}
                  key={menu.name}
                >
                  {" "}
                  {menu.name}
                </ButtonNoOutline>
              );
            })}
          </div>
        </div>
        <div className="flex  gap-5 items-center ml-auto pr-6">
          <ButtonNoOutline
            as={Link}
            href="/login"
            className={` text-white text-sm  px-6 `}
          >
            Login
          </ButtonNoOutline>
          <ButtonColored
            as={Link}
            href="/sign-up"
            className="text-black text-lg bg-pink-600 rounded-3xl py-2 px-3 "
          >
            Talk to a vet
          </ButtonColored>
        </div>
      </div>
    </div>
  );
}

interface menuitemProps {
  name: string;
  routes: string;
}
interface menuProps {
  menus: menuitemProps[];
  toggleMenu: () => void;
}
