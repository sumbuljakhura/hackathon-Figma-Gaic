"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Free from "../components/free";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faList, faStar } from '@fortawesome/free-solid-svg-icons';

export default function SingleProducts() {
  const [activeTab, setActiveTab] = useState('description'); // Track the active tab
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
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-[#F9F1E7] h-24 mt-20 flex items-center gap-8 px-8 md:px-20 mt-0">
        <ul className="flex items-center gap-2 list-none">
          <li  className="text-[#9F9F9F]">Home</li>
          <Image src={require("../../../img/black-arr.png")} alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F]">Shop</li>
          <Image src={require("../../../img/black-arr.png")} alt="arrow" width={20} height={20} />
          <li className="text-[#9F9F9F]">Asgaard Sofa</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-evenly mt-16 px-4 lg:px-24 gap-12">
        {/* Sidebar Thumbnails
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <Image
              src={require("../../../img/sec1.png")}
                width={76}
                height={80}
                className="w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div> */}

        {/* Product Image */}
        <div className="bg-[#F9F1E7] w-full lg:w-1/2 h-auto flex items-center justify-center p-4 rounded-md">
          <Image
  src={require("../../../img/Asgaard sofa.png")}           
  alt="Asgaard Sofa"
            width={500}
            height={600}
            className="max-w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col max-w-lg">
          <h1 className="text-4xl font-semibold mb-2">Asgaard Sofa</h1>
          <span className="text-2xl text-[#9F9F9F]">Rs. 250,000.00</span>
          <div className="flex items-center gap-3 mt-4">
            <Image src={require("../../../img/five-star.png")}alt="Rating" width={124} height={20} />
            <div className="border-l border-[#9F9F9F] h-3"></div>
            <span className="text-[#9F9F9F] text-sm">5 Customer Reviews</span>
          </div>
          <p className="mt-6 text-sm lg:text-base">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Selection */}
          <h2 className="mt-14 text-[#9F9F9F]">Size:</h2>
          <div className="flex items-center gap-3 mt-4">
            {["L", "XL", "XS"].map((size) => (
              <button
                key={size}
                className="w-8 h-8 bg-[#FBEBB5] text-sm rounded flex items-center justify-center hover:bg-[#FBEBB5]  "
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color Selection */}
          <h2 className="mt-14 text-[#9F9F9F]">Color:</h2>
          <div className="flex items-center gap-3 mt-4">
            {["#816DFA", "#000000", "#B88E2F"].map((color) => (
              <div key={color} className="w-8 h-8 rounded-full" style={{ backgroundColor: color }}></div>
            ))}
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            <div className="flex items-center border border-black rounded-2xl w-[123px] h-[64px]">
              <button className="px-3">-</button>
              <span className="px-4">1</span>
              <button className="px-3">+</button>
            </div>
         <Link href={"/cart"}>  
          <button className="w-[123px] h-[64px] rounded-2xl border border-black">Add To Cart</button>
         </Link> <button className="w-52 h-16 bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2">
              <span>+</span>
              <span>Compare</span>
            </button>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto p-8">
      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b-2 mb-6">
        <button
          onClick={() => setActiveTab('description')}
          className={`py-2 px-4 ${activeTab === 'description' ? 'border-b-2 ' : 'text-gray-500'}`}
        >
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
          Description
        </button>

        <button
          onClick={() => setActiveTab('additional-info')}
          className={`py-2 px-4 ${activeTab === 'additional-info' ? 'border-b-2': 'text-gray-500'}`}
        >
          <FontAwesomeIcon icon={faList} className="mr-2" />
          Additional Information
        </button>

        <button
          onClick={() => setActiveTab('reviews')}
          className={`py-2 px-4 ${activeTab === 'reviews' ? 'border-b-2' : 'text-gray-500'}`}
        >
          <FontAwesomeIcon icon={faStar} className="mr-2" />
          Reviews (5)
        </button>
      </div>

      {/* Content for each tab */}
      <div className="tab-content">
        {activeTab === 'description' && (
          <div className="description">
            <h2 className="text-xl font-semibold">Product Description</h2>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut orci vestibulum,
              scelerisque risus eu, pretium ipsum. Donec at malesuada erat. Etiam vel lectus
              eget libero efficitur tincidunt.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut orci vestibulum,
              scelerisque risus eu, pretium ipsum. Donec at malesuada erat. Etiam vel lectus
              eget libero efficitur tincidunt <br />  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut orci vestibulum,
              scelerisque risus eu, pretium ipsum. Donec at malesuada erat. Etiam vel lectus
              eget libero efficitur tincidunt.
            </p>
          </div>
        )}

        {activeTab === 'additional-info' && (
          <div className="additional-info">
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <ul className="mt-4 text-gray-700 list-disc pl-6">
              <li>Dimensions: 20 x 15 x 10 cm</li>
              <li>Weight: 500g</li>
              <li>Material: Cotton</li>
              <li>Color: Blue</li>
              <li>Made in USA</li>
            </ul>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews">
            <h2 className="text-xl font-semibold">Customer Reviews</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2">5/5</span>
              </div>
              <p className="mt-2 text-gray-700">This product is amazing! I love the quality.</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2">4/5</span>
              </div>
              <p className="mt-2 text-gray-700">Good value for money. Would recommend!</p>
            </div>
            {/* Add more reviews as needed */}
          </div>
        )}
      </div>
    </div>
      <div className="flex items-center justify-between p-8 ml-12 mr-12">
        
      {/* Left Section - Image */}
      <div className="w-1/2">
        <Image
          src={require("../../../img/bsaof.png")}
          alt="Example Image"
          width={900} 
          height={300}
        />
      </div>

      {/* Right Section - Content */}
      <div className="w-1/2 pl-8">
      <Image
          src={require("../../../img/bsaof.png")}
          alt="Example Image"
          width={900} 
          height={300}
        />
      </div>
    </div>
  
       {/* Product Grid */}
       <div className="flex-grow text-center px-16 py-16">
       <h2 className="text-3xl font-bold">Related Products</h2></div>
       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
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
      <Free/>
    </>
  );
}
