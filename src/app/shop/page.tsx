import Image from "next/image";
import Link from "next/link";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/transpartsoaf.png"),
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/dining chair.png"),
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Outdoor bar table and stool.png"),
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Plain console with teak mirror.png"),
    },
    {
      id: 5,
      name: "Grain coffee table",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Grain coffee table.png"),
    },
    {
      id: 6,
      name: "Kent coffee table",
      price: "Rs. 22,000.00",
      imgSrc: require("../../../img/Kent coffee table.png"),
    },
    {
      id: 7,
      name: "Round coffee table_color 2",
      price: "Rs. 251,000.00",
      imgSrc: require("../../../img/Round coffee table_color 2.png"),
    },
    {
      id: 8,
      name: "Reclaimed teak coffee table",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Reclaimed teak coffee table.png"),
    },
    {
      id: 9,
      name: "Grain coffee table",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Grain coffee table.png"),
    },
    {
      id: 10,
      name: "Kent coffee table",
      price: "Rs. 22,000.00",
      imgSrc: require("../../../img/Kent coffee table.png"),
      
    },
    {
      id: 11,
      name: "Round coffee table_color 2",
      price: "Rs. 251,000.00",
      imgSrc: require("../../../img/Round coffee table_color 2.png"),
    },
    {
      id: 12,
      name: "Reclaimed teak coffee table",
      price: "Rs. 25,000.00",
      imgSrc: require("../../../img/Reclaimed teak coffee table.png"),
    },
  
    // Add more products here if necessary
  ];

  return (
    <>
 <header className="contact h-32 bg-slate-100 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-black">Shop</h1>
        </header>
        <div className="h-auto bg-[#FAF4F4] flex flex-col sm:flex-row items-center justify-between p-2 sm:p-4">
                <div className="flex flex-wrap items-center justify-center sm:justify-evenly space-x-4 sm:space-x-8 w-full">
                    <Image
                        src={require('../../../img/dotted-line.svg')}
                        alt="dotted-line"
                        width={25}
                        height={25}
                    />
                    <h3 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold">Filter</h3>
                    <Image
                        src={require('../../../img/four-dot.svg')}
                        alt="four-dot"
                        width={25}
                        height={25}
                    />
                    <Image
                        src={require('../../../img/square-line.svg')}
                        alt="square-line"
                        width={25}
                        height={25}
                    />
                </div>
                <div className="flex flex-wrap items-center justify-between sm:space-x-4 mt-2 sm:mt-0 w-full">
                    <span className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</span>
                    <span className="text-xs sm:text-sm md:text-base">Show</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                    </div>

                    <span className="text-xs sm:text-sm md:text-base">Short by</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">Default</h3>
                    </div>
                </div>
            </div>
    <div className="flex-grow text-center px-16 py-16">



      {/* Page Title */}
      <h2 className="text-3xl font-bold">Top Picks For You</h2>
      <h3 className="text-base text-gray-400 pt-3 pb-12">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor, and table lights.
      </h3>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Product Image */}
            <Image
              src={product.imgSrc}
              alt={product.name}
              width={400}
              height={600}
              className="rounded-md"
            />
            {/* Product Details */}
            <h3 className="text-lg font-medium mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
           <Link href={"/singleproduct"} ><button className="mt-4 px-4 py-2 text-black rounded-md hover:bg-[#FBEBB5] transition-colors">
Add to cart            </button></Link>
          </div>
        ))}
      </div>

       {/* Pagination */}
       <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] rounded-sm  text-black flex items-center justify-center ${item === '1' ? 'bg-[#FBEBB5] text-black' : 'bg-[#F9F1E7]'
              }`}
          >
            {item}
          </div>
        ))}</div>
    </div></>
  );
}
