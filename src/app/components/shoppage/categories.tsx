import { useEffect, useState } from "react";
import ProductCard from "./components/productCard";

interface IProduct {
  id: number;
  image: string;
  name: string;
  rating: string;
  category: string;
  price: number;
}
export default function Categories() {
  const products = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);
  const [Products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();        
        setProducts(products(result).slice(0, 15));
        setData(products(result).slice(0, 15))
        console.log(result);
        
      } catch (error:any) {
        console.error(error.message);
      }
    };
    fetchProducts();
  }, []);

  const tabs = ["all", "dog", "exotic", "cat"];

  const handleTab = (index: number) => {
    const category = tabs[index].toLowerCase();
    setSelected(index);

    if (category == "all") {
      setData(products(Products).slice(0, 15));
    } else {
      const filterData = Products.filter((item:IProduct) =>
        item.category.includes(category)
      );
      setData(products(filterData).slice(0, 15));
    }    
  };

  return (
    <div className="bg-white flex flex-col p-16 ml-10 ">
      <h1 className=" text-3xl text-black font-bold">
        {" "}
        Explore popular categories
      </h1>

      <div className="flex flex-row mt-20 justify-between px-36">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`${
              selected === index ? "text-pink-600" : "text-gray-400"
            } cursor-pointer hover:text-pink-600 text-xl capitalize`}
            onClick={() => handleTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-20">
        {data?.map((item: IProduct) => (
          <ProductCard
            key={item.name}
            id={item.id}
            name={item.name}
            image={item.image}
            rating={item.rating}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
