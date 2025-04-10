import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const AdvancedContent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          'http://localhost:1337/api/products?populate=image&pagination[limit]=6'
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error('error product', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Download...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-20'>
      <div className="container mx-auto px-4"> 
        <div className="header flex justify-between items-center mb-6"> 
          <div className="header-right">
            <h3 className="text-2xl font-semibold">Picks for you</h3>
          </div>
          <div className="header-left">
            <a
              href=" "
              className="view-all border-2 border-gray-300 p-3 rounded-xl whitespace-nowrap bg-my-custom-green hover:bg-black hover:text-white transition duration-300"
            >
              Browse All
            </a>
           
          </div>
        </div>
        <div className="flex"> 
        <div className="left-side w-1/2 pr-6">
  <div className="card bg-white rounded-md shadow-md overflow-hidden flex"> 
    <div className="image aspect-w-1 aspect-h-[1.3] overflow-hidden w-1/2"> 
      <img
        src="https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_16.jpg?v=1728615440&width=520"
        alt="Featured Book"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="product-item p-4 w-1/2 flex flex-col justify-between"> 
      <div className="desc mb-3">
        <h2 className="text-xl font-semibold">
          From the author of The Longest Ride and The Return comes a novel
          about the enduring legacy of first love, and the decisions
          that haunt...
        </h2>
      </div>
      <div className="price text-lg font-bold text-gray-800 mb-3">
        <span>119,00 ZL</span>
      </div>
      <button className="add-to-cart-button bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
</div>
<div className="right-side border-2 border-gray-300 p-4   w-1/2">
  <div className="cards grid grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-md shadow-md overflow-hidden max-w-[120px]" 
      >
        {product.image && product.image.url && (
          <div className="relative aspect-w-1 aspect-h-[0.7] overflow-hidden rounded-md"> 
            <img
              src={`http://localhost:1337${product.image.url}`}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-2"> 
          <h4 className="text-sm font-semibold mb-1">{product.name}</h4> 
          <p className="text-green-600 text-lg font-semibold">${product.price}</p> 
          <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-2 rounded-full transition duration-300 mt-4"
                >
                  Add to Cart
                </button>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContent;