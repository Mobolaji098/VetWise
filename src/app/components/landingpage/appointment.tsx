import { ButtonNoOutline, ButtonColored } from "../ui/Button";
import Link from "next/link";
import { Dog, HandHeart, Heart } from "lucide-react";

export default function Appointment() {
  return (
    <div className="bg-slate-800 h-[850px] w-full ">
      <div className="flex  flex-col items-center p-24 gap-6 ">
        <h1 className="text-white font-bold text-center text-4xl max-w-96">
          Take good care of your pet – with help from Vetster
        </h1>
        <p className="max-w-96 text-center text-white">
          Your pet will receive great care from our top-rated international
          veterinarians.
        </p>

        <ButtonColored
          as={Link}
          href="/sign-up"
          className="text-black text-lg bg-pink-600 rounded-3xl py-3 px-5 font-semibold hover:bg-pink-900"
        >
          Book an online appointment
        </ButtonColored>

        <div className="flex flex-row gap-4 mt-10">
          <div className="flex w-96 h-72 rounded-2xl   gap-3 flex-col m-16 p-8">
            <HandHeart size={40} className="text-pink-600 text-2xl" />
            <p className="font-bold text-white text-start mt-3 text-2xl">
              Guidance & support
            </p>
            <p className="text-white font-light text-start">
              Vets will work with you to understand your pet’s health & wellness
              issues, as well as provide guidance and next steps to help your
              pet.
            </p>
          </div>
          <div className="flex w-96 h-72 rounded-2xl  gap-3 flex-col m-16 p-8">
            <Dog size={40} className="text-pink-600 text-2xl" />

            <p className="font-bold text-white text-start mt-3 text-2xl">
              Over-the-counter product suggestions
            </p>
            <p className="text-white font-light text-start">
              While prescriptions are not available, Vetster vets can make
              suggestions as to which non-medicated products would be helpful
              for your pet’s health concern.
            </p>
          </div>
          <div className="flex w-96 h-72 rounded-2xl gap-3 flex-col m-16 p-8">
            <Heart size={40} className="text-pink-600 text-2xl" />

            <p className="font-bold text-white text-start mt-3 text-2xl">
              Peace of mind
            </p>
            <p className="text-white font-light text-start">
              With access to expert advice 24/7 through Vetster, you can be sure
              your pet’s health is in good hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
