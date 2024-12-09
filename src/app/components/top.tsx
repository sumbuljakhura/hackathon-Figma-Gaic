import Link from "next/link";
import Products from "./products"
import Image from "next/image";

export function Top(){
    const products = [
        { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/transpartsoaf.png"))},
        { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/dining chair.png")) },
        { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/Outdoor bar table and stool.png")) },
        { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/Plain console with teak mirror.png")) },
        // Add more products here if necessary
      ];
    


  return (
    <div className="flex-grow text-center px-16 py-16">
      <h2 className="text-3xl font-bold">Top Picks For You</h2>
      <h3 className="text-base text-gray-400 pt-3 pb-12">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={400}
              height={600}
              className="rounded-md"
            />
            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
     <Link href={"/shop"}>       <button  className="mt-4 px-4 py-2  text-black rounded-md hover:bg-[#FBEBB5] transition-colors">
              View More
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
