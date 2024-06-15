import Link from "next/link";
import Image from "next/image";
import { ButtonNoOutline, ButtonColored } from "../ui/Button";
import SearchBar from "../ui/ProduuctSearchBar";
import { ArrowDown, ChevronDown, ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";

export default function Navbar({ setShowCart,showCart }: any) {
  const cartproduct = useAppSelector((state) => state.cartReducer);
  const cartCount = () => {
    let total = 0;    
    cartproduct.forEach((item) => (total = total + item.quantity));    
    return total;
  };
  
  return (
    <div className="bg-slate-800 fixed top-0 w-full z-50  ">
      <div className="flex flex-row h-16  m-auto   w-full lg:max-w-[1400px] items-center  max-w-[750px]">
        <div className="flex items-start">
          <Link href="./">
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="profile picture"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center mx-16 lg:min-w-[500px]">
          <SearchBar />
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
            className="text-white relative text-lg bg-pink-600 rounded-3xl py-2 px-3 cursor-pointer"
            onClick={()=>setShowCart(!showCart)}
          >
            <div className="absolute top-0 left-[10px] h-6 w-6 bg-slate-800 p-3 flex items-center justify-center text-white rounded-full">
              {cartCount()}
            </div>
            <ShoppingCart size={24} className="ml-3" />
            <p className="px-3 text-sm">Cart</p>
          </ButtonColored>
        </div>
      </div>
      <div className="flex flex-row h-16 p-5 justify-around">
        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-white  px-6 items-center flex`}
        >
          Dog
          <ChevronDown size={16} className="mx-2" />
        </ButtonNoOutline>

        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-white  px-6 items-center flex`}
        >
          Cat
        </ButtonNoOutline>

        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-white px-6 items-center flex`}
        >
          More pets
          <ChevronDown size={16} className="mx-2" />
        </ButtonNoOutline>

        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-white   px-6 items-center flex`}
        >
          Pharmacy
          <ChevronDown size={16} className="mx-2" />
        </ButtonNoOutline>

        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-white  px-6 items-center flex`}
        >
          Today Deals
        </ButtonNoOutline>

        <ButtonNoOutline
          as={Link}
          href="/login"
          className={` text-orange-300  px-6 items-center flex`}
        >
          Free delivery on First time orders over ₦5000
        </ButtonNoOutline>
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
