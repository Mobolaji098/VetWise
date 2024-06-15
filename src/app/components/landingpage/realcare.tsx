import { ButtonNoOutline, ButtonColored } from "../ui/Button";
import Link from "next/link";
import { Bird, Dog, HandHeart, Heart, ThumbsUp } from "lucide-react";


export default function Realcare() {
  return (
    <div className="bg-slate-800  w-full ">
      <div className="flex flex-col items-center p-28 gap-6">
        <h1 className="text-white font-bold text-4xl ">
          Real care, real results
        </h1>
        <h4 className="text-white text-lg">
        Vetster veterinary surgeons are here to answer your questions!
        </h4>
        <div className="flex flex-row gap-3">
        <ButtonColored
          as={Link}
          href="/sign-up"
          className="text-black text-lg bg-pink-600 rounded-3xl py-3 px-5 font-semibold hover:bg-pink-900"
        >
          Talk to a vet
        </ButtonColored>

        <ButtonColored
          as={Link}
          href="/sign-up"
          className="text-black text-lg bg-white rounded-3xl py-3 px-5 font-semibold hover:bg-pink-900"
        >
          Discover the Pet Connection
        </ButtonColored>

        </div>
        <div className="flex flex-row mt-10 gap-10 flex-wrap">


    <div className="flex flex-col items-center border-r border-gray-500 pr-8" >
    <HandHeart size={40} className="text-pink-600" />
    <p className="font-bold text-white text-3xl mt-5"> 1000's</p>
    <p className=" text-white  "> of ailments treated</p>
    </div>


    <div className="flex flex-col items-center  border-r border-gray-500 pr-8">
    <ThumbsUp size={40} className="text-pink-600 " />
    <p className="font-bold text-white text-3xl mt-5"> 97% </p>
    <p className=" text-white  "> resolution rate</p>
    </div>

    <div className="flex flex-col items-center">
    <Bird size={40} className="text-pink-600" />
    <p className="font-bold text-white text-3xl mt-5"> 20+ </p>
    <p className=" text-white  "> species treated</p>
    </div>

   

        </div>
      </div>
    </div>
  );
}
