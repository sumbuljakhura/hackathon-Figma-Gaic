import Image from "next/image";
import Link from "next/link";

export function AsgaardSofa() {
  return (
    <main className="flex flex-col md:flex-row h-full items-center justify-between px-6 md:px-14 py-10 bg-[#FBEBB5] text-black space-y-6 md:space-y-0">
      {/* Image Section */}
      <div className="flex-grow text-center">
        <Image
          src={require("../../../img/Asgaard sofa.png")}
          alt="Asgaard Sofa"
          width={900}
          height={480} // Specify height for responsiveness
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center ">
  <h2 className="text-base font-semibold text-gray-700">New Arrivals</h2>
  <h1 className="text-3xl md:text-4xl font-bold text-black">Asgaard Sofa</h1>
  <Link href={"/singleproduct"}> <button className="mt-4 px-6 py-2 border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors">
    View More
  </button></Link>
</div>

    </main>
  );
}
