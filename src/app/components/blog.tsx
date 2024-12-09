import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faClock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function Blog() {
  const blogs = [
    {
      id: 1,
      name: "Going all-in with millennial design",
      imgSrc: require("../../../img/Going all-in with millennial design.jpeg"),
      icon:faClock,
      time:"5mints",
      icon2:faCalendar,
      date:"8 December 2024",

    },
    {
      id: 2,
      name: "Going all-in with millennial design",
      imgSrc: require("../../../img/laptop.jpeg"),
      icon:faClock,
      time:"5mints",
      icon2:faCalendar,
      date:"8 December 2024",


    },
    {
      id: 3,
      name: "Going all-in with millennial design",
      imgSrc: require("../../../img/lcd.jpeg"),
      icon:faClock,
      time:"5mints",
      icon2:faCalendar,
      date:"8 December 2024",

    },
  ];

  return (
    <div className="flex flex-col items-center text-center px-8 py-16">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold">Our Blogs</h2>
      <h3 className="text-base text-gray-400 pt-3 pb-12">
      Find a bright ideal to suit your taste with our great selection
      </h3>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center w-full max-w-screen-lg">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <Image
              src={blog.imgSrc}
              alt={blog.name}
              width={800}
              height={600}
              className="rounded-md"
            />
            
            <h3 className="text-lg font-medium mt-4">{blog.name}</h3>
            <button className="mt-4 px-4   text-black border-b-2 border-black  hover:bg-[#FBEBB5] hover:rounded-md transition-colors">
Read More            </button>        
                <p className="text-gray-600 mt-2 space-x-5"><FontAwesomeIcon icon={blog.icon}/> {blog.time}
             <FontAwesomeIcon icon={blog.icon2}/> {blog.date} </p>




           
          </div>
          
        ))}
       
   
      </div>
      <button className="mt-4 px-12 py-2 mt-7 items-center border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors">
      View All Post</button>
    </div>
  );
}
