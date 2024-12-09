import Image from "next/image";

export function Tables() {
  return (
    <section className="flex flex-wrap items-center justify-center bg-[#FAF4F4] text-black w-full">
      {/* First Item */}
      <div className="w-full sm:w-1/2 px-4 py-10 flex flex-col items-center">
        <Image
          src={require("../../../img/sidetable.png")}
          alt="Side Table"
          width={400}
          height={300}
        />
        <h2 className="text-2xl font-bold mt-4">Side Tables</h2>
        <h2 className="text-lg underline decoration-black text-black hover:bg-gray-700 hover:text-white px-2 py-1 mt-2 transition-colors cursor-pointer">
          View More
        </h2>
      </div>

      {/* Second Item */}
      <div className="w-full sm:w-1/2 px-4 py-10 flex flex-col items-center">
        <Image
          src={require("../../../img/seat.png")}
          alt="Seat"
          width={700}
          height={500}
        />
        <h2 className="text-2xl font-bold mt-4">Seats</h2>
        <h2 className="text-lg underline decoration-black text-black hover:bg-gray-700 hover:text-white px-2 py-1 mt-2 transition-colors cursor-pointer">
          View More
        </h2>
      </div>
    </section>
  );
}
