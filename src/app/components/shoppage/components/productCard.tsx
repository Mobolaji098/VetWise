import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import {addToCart} from "@/redux/features/cartSlice"
import {useRouter} from "next/navigation"
import {toast} from "react-hot-toast"

interface IProduct{
    id:number;
    image: string;
    name: string;
    rating: string;
    category:string;
    price: number;

}

export default function ProductCard({id,name,rating,category,price,image}:IProduct){
    const dispatch = useAppDispatch();
    const router = useRouter();

    const addProductToCart = (e:React.FormEvent) => {        
        e.stopPropagation();
        const payload = {
            id,name,image,category,rating,price,quantity:1
        };
        dispatch(addToCart(payload));
        toast.success('Added To Cart')

    }
    return(
        <div className="flex flex-col text-black cursor-pointer " 
        // /details/${id}
        // onClick={()=> router.push(``)}
        >
            <Image
              src={image}
              width={200}
              height={200}
              alt="product picture"
            />
            <h1 className="text-black"> {name}</h1>
            <h4>{category}</h4>
            <h4>{rating}</h4>
            <h4>{price}</h4>
            <div className="bg-zinc-800 p-5 cursor-pointer w-10 h-10 text-red-500 " 
            onClick={ addProductToCart}> 
            <p>add to cart</p></div>
       
        </div>
    )
}