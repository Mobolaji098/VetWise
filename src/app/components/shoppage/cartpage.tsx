import { useAppSelector } from "@/redux/hooks";
import Cartproducts from "./components/cartproducts";

interface IProduct {
  id: number;
  image: string;
  name: string;
  rating: string;
  category: string;
  price: number;
  quantity:number;
}

export default function Cartpage ({ setShowCart, showCart }: any) {
  const products = useAppSelector((state) => state.cartReducer);
  const isEmpty = products.length == 0;

  const getTotal = () => {
    let total = 0;
    console.log(products);
    
    products.forEach((item:IProduct) => (total = total + item.price * item.quantity));
    console.log(total);
    
    return total;
  };

  return (
    <div>
      {showCart ? (
        <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll mt-32">
          <div className="max-w-[500px] w-full min-h-full bg-white absolute right-0 top-0 p-6 pb-96">
            <div
              className="cursor-pointer absolute top-7 right-10 text-xl text-red-500"
              onClick={() => setShowCart(false)}
            >
              {" "}
              x{" "}
            </div>
            {isEmpty ? emptyCart(setShowCart) : cart({ products, getTotal })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}


function emptyCart(setShowCart: any) {
  return (
    <div className="flex flex-col justify-center items-center pt-32 gap-10">
      <p className="text-xl font-bold ">Your cart is empty</p>
      <div
        className="bg-pink-600 cursor-pointer p-5 justify-center flex items-center rounded-md text-white"
        onClick={() => setShowCart(false)}
      >
        Continue shoping
      </div>
    </div>
  );
}

function cart({ products, getTotal }: any) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row gap-5">
        <p className="font-bold text-3xl">Cart</p>
        <p> `{products.length} Items`</p>
      </div>
      {products.map((product: IProduct) => (
        <Cartproducts
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          rating={product.rating}
          category={product.category}
          price={product.price}
          quantity = {product.quantity}
        />
      ))}
    <div>
        Total: {getTotal()}
    </div>

    </div>
  );
}
