import Image from "next/image";

interface Ifeatures {
  image: string;
  title: string;
  text: string;
}
// pexels-kelly-cormier-1095134322-20681882.jpg

export default function Feature({image,title,text} : Ifeatures) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Image src={image} width={200} height={200} alt=" picture" />
      <div className=""></div>
      <p className="font-medium text-md uppercase text-black">{title}</p>
      <p className="text-black text-center mb-10">{text}</p>
    </div>
  );
}
