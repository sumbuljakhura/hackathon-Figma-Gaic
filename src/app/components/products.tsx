// pages/index.js
import Image from 'next/image';

export default function Products() {
  const products = [
    { id: 1, name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/transpartsoaf.png")) },
    { id: 2, name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/dining chair.png")) },
    { id: 3, name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/Outdoor bar table and stool.png")) },
    { id: 4, name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', imgSrc:(require("../../../img/Plain console with teak mirror.png")) },
    // Add more products here if necessary
  ];

  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <Image src={product.imgSrc} alt={product.name} width={300} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}
