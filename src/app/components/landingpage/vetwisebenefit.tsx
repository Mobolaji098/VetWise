export default function Vetwisebenefit() {
  return (
    <div className="bg-white h-screen w-full ">
      <div className="flex  flex-col items-center gap-5  m-auto w-1/2">
        <h3 className="text-slate-800 font-bold lg:text-5xl mt-32 text-center">
          Only Vetster lets you choose the veterinarian who will treat your pet
        </h3>
        <h4 className="text-black md:text-xl text-center">
          Thousands of top-rated practising veterinary surgeons are on Vetwise
        </h4>
        <div className="flex flex-row gap-10 mt-24">
          <div className="flex flex-col">
            <div className="w-96  h-60 rounded-t-lg border-blue-300 border"></div>
            <div className="flex w-96 h-32 border border-blue-200 gap-3 flex-col">
              <p className="font-bold text-black text-center mt-3">
                Find the right vet for your pet
              </p>
              <p className="text-black font-light text-center">
                Browse vet profiles and read reviews from other pet parents.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-96  h-60 rounded-t-lg border-blue-300 border"></div>
            <div className="flex w-96 h-32 border border-blue-200 gap-3 flex-col">
              <p className="font-bold text-black text-center mt-3">
              Vet Care
              </p>
              <p className="text-black font-light text-center">
                Exceptional in-person routine and urgent care from our
                compassionate veterinary teams.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-96  h-60 rounded-t-lg border-blue-300 border"></div>
            <div className="flex w-96 h-32 border border-blue-200 gap-3 flex-col">
              <p className="font-bold text-black text-center mt-3">
                Get pet supplies on the app.
              </p>
              <p className="text-black font-light text-center">
                Browse pet supplies and drugs from the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
