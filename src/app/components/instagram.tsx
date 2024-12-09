export function Instagram() {
    return (
      <div
        className="inst flex flex-col items-center text-center px-8 py-16 bg-cover bg-center  bg-no-repeat"
      >
        {/* Section Heading */}

        <h2 className="text-3xl font-bold">Our Instagram</h2>
        <h3 className="text-base text-gray-400 pt-3 pb-12">
          Follow our store on Instagram
        </h3>
  
        {/* Button */}
        <button className="px-12  py-2 border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors">
          View All Posts
        </button>
      </div>
    );
  }
  