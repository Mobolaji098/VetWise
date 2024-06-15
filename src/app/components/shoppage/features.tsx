import Feature from "./components/feature";



export default function Features() {
    let datas = [
        {
          image: "/pexels-kelly-cormier-1095134322-20681882.jpg",
          title: "DOGS",
          text: "Care for the rare with products designed for your unique pet’s needs!",
        },
        {
          image: "/pexels-kelly-cormier-1095134322-20681882.jpg",
          title: "DOGS",
          text: "Care for the rare with products designed for your unique pet’s needs!",
        },
        {
          image: "/pexels-kelly-cormier-1095134322-20681882.jpg",
          title: "DOGS",
          text: "Care for the rare with products designed for your unique pet’s needs!",
        },
        {
          image: "/pexels-kelly-cormier-1095134322-20681882.jpg",
          title: "DOGS",
          text: "Care for the rare with products designed for your unique pet’s needs!",
        },
      ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-16 px-16">
      {datas.map((data) => (
        <Feature key={data.title} image={data.image} title={data.title} text={data.text} />
      ))}
    </div>
  );
}
