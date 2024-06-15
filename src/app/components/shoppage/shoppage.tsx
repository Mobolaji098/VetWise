"use-client"
import Navbar from "./navbar";
import { useState } from "react";
import { Hero } from "./hero";
import Features from "./features";
import Categories from "./categories";
import Cartpage from "./cartpage";

export default function Shoppage() {
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <div>
      <Navbar setShowCart={setShowCart}  showCart={showCart}/>
      <Hero/>
      <Features/>
      <Categories/>
      <Cartpage setShowCart={setShowCart}  showCart={showCart}/>
    </div>
  );
}
