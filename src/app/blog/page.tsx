import { icon } from "@fortawesome/fontawesome-svg-core";
import { faCalendar, faClock, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const BlogPage = () => {
  
  return (
    <>
         {/* Header Section */}
         <header className="contact h-32 bg-slate-100 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">Blog</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        {/* Left Section */}
        <div className="lg:w-3/4  lg:ml-12">
          {/* Blog Post 1 */}
          <Image
            src={require("../../../img/laptop.jpeg")}
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
          <Image src={require('../../../img/user.svg')} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={require('../../../img/briefcase.svg')} alt="briefcase-img" width={20} height={20} />

            <h3 className="text-[#9F9F9F] text-sm lg:text-base">12 DEC 2024</h3>
            <Image src={require('../../../img/wood.svg')}alt="wood-img" width={20} height={20} />
                
                <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
     </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 2 */}
          <Image
            src={require('../../../img/drawing.png')}
            alt="drawing-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={require('../../../img/user.svg')} alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={require('../../../img/briefcase.svg')} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={require('../../../img/wood.svg')} alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          {/* Blog Post 3 */}
          <Image
            src={require('../../../img/Going all-in with millennial design.jpeg')}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image src={require('../../../img/user.svg')}
 alt="user-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image src={require('../../../img/briefcase.svg')} alt="briefcase-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image src={require('../../../img/wood.svg')}alt="wood-img" width={20} height={20} />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <span className="border-b border-black text-sm">Read More</span>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/ lg:mr-20 lg:ml-20 mt-10 lg:mt-28 ">
          {/* Search Bar */}
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <Image src={require('../../../img/research.svg')} alt="search-img" width={20} height={20} />
          </div>

          {/* Categories */}
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">Categories</h1>
          <div className="space-y-4">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div key={category.name} className="flex space-x-2 text-sm lg:text-base ">
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <h1 className="text-[24px] font-semibold mb-8">Recent Posts</h1>
          {[
            { src: require("../../../img/pro1.png"),
                 title: 'Going all-in with millennial design' },
            { src:require("../../../img/pro2.png"), title: 'Exploring new ways of decorating' },
            { src: require("../../../img/pro3.png"), title: 'Handmade pieces that took time to make' },
            { src: require("../../../img/pro4.png"), title: 'Modern home in Milan' },
            { src: require("../../../img/pro5.png"), title: 'Colorful office redesign' },
          ].map((post, index) => (
            <div key={index} className="flex items-center space-x-5">
              <Image src={post.src} alt={`post${index + 1}`} width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="font-semibold text-[14px] w-[119px]">{post.title}</h1>
                <span className="text-[#9F9F9F]">03 Aug 2022</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='lg:mb-[300px]  sm:mb-0'></div>

      /* Pagination */}
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
    </>
  );
};

export default BlogPage;
