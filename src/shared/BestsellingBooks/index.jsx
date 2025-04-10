import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BestsellingBooks = () => {
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
    <div className="mx-auto max-w-10xl px-6 sm:px-8 lg:px-14">
      <div className="shopify py-8 flex items-center justify-between"> 
        <div className="header text-left mb-6">
          <h3 className="text-2xl font-semibold">Current bestselling books</h3>
        </div>
        <a
          href=" "
          className="view-all border-3 border-gray-300 p-4 rounded-xl whitespace-nowrap bg-my-custom-green hover:bg-black hover:text-white "
        >
          Browse All
        </a>
      </div>
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 my-11">
      {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow-md flex flex-col min-h-[400px]">
                {product.image && product.image.url && (
                  <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
                    <img
                      src={`http://localhost:1337${product.image.url}`}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="mt-2 text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-900 font-semibold">${product.price}</p>
                  {product.ProductRate && <div dangerouslySetInnerHTML={{ __html: product.ProductRate }} />}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart-button bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default BestsellingBooks;