import { ButtonNoOutline, ButtonColored } from "../ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function Bettervetcare() {
  return (
    <div className="bg-white h-[760px] w-full ">
      <div className="flex flex-row">
        <div className="flex  flex-col  gap-8   w-1/2 pl-48 pr-10">
          <h3 className="text-slate-800 font-bold lg:text-4xl mt-24 text-start ">
            Get better vet care & meet with a vet in just minutes
          </h3>
          <h5 className="text-black text-xl text-start">
            Getting started is as easy as 1-2-3.
          </h5>
          <ButtonColored
            as={Link}
            href="/sign-up"
            className="text-black text-lg bg-pink-600 rounded-3xl py-2 px-3 max-w-40 "
          >
            Talk to a vet
          </ButtonColored>

          <div className="flex flex-col">
            <div className="flex flex-row mt-10 ">
              <div className="h-12 w-12 rounded-full bg-slate-800 text-center flex items-center justify-center text-white">
                1
              </div>
              <div className="flex flex-col ml-6 gap-1">
                <h3 className="text-slate-800 font-bold text-start ">
                  Choose your vet
                </h3>
                <h5 className="text-black text-start">
                  Browse top ranked vets near you, and choose the best vet for
                  your pet.
                </h5>
              </div>
            </div>


            <div className="flex flex-row mt-10 ">
              <div className="h-12 w-12 rounded-full bg-slate-800 text-center flex items-center justify-center text-white">
                2
              </div>
              <div className="flex flex-col ml-6 gap-1">
                <h3 className="text-slate-800 font-bold   text-start ">
                Book an appointment
                </h3>
                <h5 className="text-black text-start">
                Pick a time with your vet and get the care your pet needs, today.
                </h5>
              </div>
            </div>


            <div className="flex flex-row mt-10 ">
              <div className="h-12 w-12 rounded-full bg-slate-800 text-center flex items-center justify-center text-white">
                3
              </div>
              <div className="flex flex-col ml-6 gap-1">
                <h3 className="text-slate-800 font-bold   text-start ">
                Get personalised care
                </h3>
                <h5 className="text-black text-start">
                Get the answers you need for your pet including general advice and more.
                </h5>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
}
