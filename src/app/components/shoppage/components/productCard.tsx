import Image from "next/image";

interface IProduct{
    id:number;
    image: string;
    name: string;
    rating: string;
    category:string;
    price: number;

}

export default function ProductCard({id,name,rating,category,price,image}:IProduct){
    return(
        <div className="flex flex-col text-black">
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
       
        </div>
    )
}