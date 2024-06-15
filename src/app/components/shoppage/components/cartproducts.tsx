import Image from "next/image";

interface IProduct {
  id: number;
  image: string;
  name: string;
  rating: string;
  category: string;
  price: number;
  quantity:number;
}

export default function Cartproducts({
  id,
  image,
  name,
  rating,
  category,
  price,
  quantity,
}: IProduct) {
  return (
    <div className="flex flex-row gap-5">
      <Image src={image} width={200} height={200} alt="cart picture" />
      <div className="flex flex-col gap-3">
        <p>Name: {name}</p>
        <p>{rating}</p>
        <p>category: {category}</p>
        <p>Price: {price}</p>
        <p>quantity:{quantity}</p>
      </div>
    </div>
  );
}
