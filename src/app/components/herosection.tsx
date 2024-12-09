import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-between bg-[#FBEBB5] text-black p-8 ">
    {/* Text and Button on the Left */}
    <div className="text flex flex-col items-start">
      <h2 className="font-black text-5xl font-medium px-4 sm:px-8 md:px-16 mb-4">
        Rocket Single Seater
      </h2>
      <h2 className="px-14 py-4 text-lg underline  decoration-black text-black hover:bg-gray-700 transition-colors">
        Shop Now
      </h2>
    </div>

    {/* Image on the Right */}
    <div className="img">
      <Image
        src={require("../../../img/herosection.png")}
        alt="Rocket Seater"
        width={853}
        height={480} // Specify height for responsiveness
      />
    </div>


      </section>);
}
