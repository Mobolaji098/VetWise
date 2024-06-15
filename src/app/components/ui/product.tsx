import Link from "next/link";
import Image from "next/image";

interface Iproduct {
  image: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  rating: number;
  precription:boolean;
}

export default function Product(product: Iproduct) {
  return (
    <div className="flex flex-col">
      <Link href="./">
        <Image
          src={product.image}
          width={200}
          height={200}
          alt={product.name}
        />
        <p> {product.name} {product.description}</p>
        <p>{product.rating}</p>
        <p>{product.price}</p>
      </Link>
      {
        product.precription ? "Prescription Item": ""
      }
      
    </div>
  );
}
