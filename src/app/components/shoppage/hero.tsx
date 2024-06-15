import ProgressSlider from "./components/progress-slider";

const SilderImg01 = "/Vetwise1.png";
const SilderImg02 = "/Vetwise1.png";
const SilderImg03 = "/Vetwise1.png";
const SilderImg04 = "/Vetwise1.png";
const SilderIcon01 = "/Vetwise1.png";
const SilderIcon02 = "/Vetwise1.png";
const SilderIcon03 = "/Vetwise1.png";
const SilderIcon04 = "/Vetwise1.png";

const items = [
  {
    img: SilderImg01,
    desc: "DOGS",
    buttonIcon: SilderIcon01,
  },
  {
    img: SilderImg02,
    desc: "CATS",
    buttonIcon: SilderIcon02,
  },
  {
    img: SilderImg03,
    desc: "EXOTIC",
    buttonIcon: SilderIcon03,
  },
  {
    img: SilderImg04,
    desc: "PRESCRIPTIONS",
    buttonIcon: SilderIcon04,
  },
];
export function Hero() {
  return (
    <div className="mt-40 flex flex-col justify-center items-center">
      <ProgressSlider items={items} />
    </div>
  );
}
