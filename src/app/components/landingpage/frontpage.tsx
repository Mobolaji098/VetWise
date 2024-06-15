import Link from "next/link";
import Image from "next/image";
import { ButtonNoOutline, ButtonColored } from "../ui/Button";

export default function Frontpage() {
  return (
    <div className="mt-16">
      <div className="absolute -z-40">
        <Image
          src={"/pexels-babydov-7788609.jpg"}
          width={2000}
          height={70}
          alt="profile picture"
          className="blur-sm"
        />
      </div>
      <div className="flex relative">
        <div className="flex flex-col justify-center items-center w-1/2 p-32 gap-7 ml-10">
          <h1 className="text-white lg:text-6xl md:text-4xl sm:text-3xl font-bold ">
            Stop stressing about your pet’s health with 24/7 online vet care
          </h1>
          <h4 className="text-white md:text-2xl ">
            Talk to a vet in minutes and receive a care and treatment plan with
            the top-ranked pet health app.
          </h4>
          <div className=" flex item-start justify-start w-full">
            <ButtonColored
              as={Link}
              href="/sign-up"
              className="text-black text-lg bg-pink-600 rounded-3xl py-3 px-5 font-semibold"
            >
              Talk to a vet
            </ButtonColored>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
