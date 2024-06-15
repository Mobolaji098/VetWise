import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ArrowDown, ChevronDown, ShoppingCart } from "lucide-react";

interface IProduct {
  id: number;
  image: string;
  name: string;
  rating: string;
  category: string;
  price: number;
}

export default function ProductCard({
  id,
  name,
  rating,
  category,
  price,
  image,
}: IProduct) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prevCount) => prevCount + 1);
  const decrement = () =>
    setQuantity((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      image,
      category,
      rating,
      price,
      quantity,
    };
    dispatch(addToCart(payload));
    toast.success("Added To Cart");
    setQuantity(1)
  };
  return (
    <div
      className="flex flex-col text-black cursor-pointer shadow-md rounded-lg gap-3 px-6 mb-5"
      // /details/${id}
      // onClick={()=> router.push(``)}
    >
      <Image className="" src={image} width={300} height={200} alt="product picture" />
      <h1 className="text-black font-bold"> {name}</h1>
      <h4>{category}</h4>
      <h4>{rating}</h4>
      <h4 className="text-red-800 text-lg">₦ {price}</h4>

      <div className="flex items-center space-x-4">
        <p>Quantity</p>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-2 py-1 text-sm rounded-sm hover:bg-red-700 transition"
        >
          -
        </button>
        <span className="text-xl font-bold">{quantity}</span>
        <button
          onClick={increment}
          className="bg-green-500 text-white px-2 py-1 text-sm rounded-sm hover:bg-green-700 transition"
        >
          +
        </button>
      </div>

      <div
        className="bg-slate-800 text-white  cursor-pointer  px-4 py-2 my-3 rounded-md flex flex-row gap-5"
        onClick={addProductToCart}
      >
        <p className=" "><ShoppingCart/></p>
        <p className=" "> Add to cart</p>
      </div>
    </div>
  );
}
