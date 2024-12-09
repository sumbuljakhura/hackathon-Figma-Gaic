import Link from "next/link";

export function Footer() {
    return (
      <footer className="text-gray-600 body-font">
        <div className="container mx-auto px-6 sm:px-12 py-6 sm:py-12">
          {/* Footer content with 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {/* Column 1: Address */}
            <div className="px-4 text-center sm:text-left">
              <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </h2>
            </div>
  
            {/* Column 2: Links */}
            <div className="px-4 text-center sm:text-left">
              <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">Links</h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  
              <a href={"/"}  className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                    <a href={"/shop"} className="text-gray-600 hover:text-gray-800">Shop</a>
                </li>
              
                <li>
                <a href={"/blog"}  className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
               <a href={"/contact"}  className="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
              </nav>
            </div>
  
            {/* Column 3: Help */}
            <div className="px-4 text-center sm:text-left">
              <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">Help</h2>
              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Privacy Policies</a>
                </li>
              </nav>
            </div>
  
            {/* Column 4: Newsletter */}
            <div className="px-4 text-center sm:text-left">
              <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">Newsletter</h2>
              <div className="relative sm:w-64 w-full mx-auto">
                <input
                  type="email"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-full bg-opacity-50 border-b-2 focus:bg-transparent focus:ring-indigo-200 focus:border-[#FBEBB5] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button className="inline-flex text-black border-0 py-2 px-6 focus:outline-none hover:bg-[#FBEBB5] rounded mt-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row justify-center sm:justify-start">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              2022 Meubel House. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    );
  }
  