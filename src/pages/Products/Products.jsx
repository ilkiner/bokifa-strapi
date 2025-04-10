import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/index'; 

const ITEMS_PER_PAGE = 9;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriesData, setCategoriesData] = useState({ data: [] });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } = useContext(CartContext); 

  const fetchProducts = async (category = null) => {
    setLoading(true);
    setError(null);
    try {
      const start = (currentPage - 1) * ITEMS_PER_PAGE;
      let apiUrl = `http://localhost:1337/api/products?populate=*&pagination[start]=${start}&pagination[limit]=${ITEMS_PER_PAGE}`;

      if (category) {
        apiUrl += `&filters[categories][name][$eq]=${category}`;
      }

      const response = await axios.get(apiUrl);
      setProducts(response.data.data);
      setTotalProducts(response.data.meta.pagination.total);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/Categories");
        if (response.data && response.data.data) {
          setCategoriesData(response.data);
        }
      } catch (error) {
        console.error("error categor:", error);
      }
    };

    fetchCategoriesData();
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory);
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center items-center space-x-2 py-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-green-500 disabled:opacity-50"
        >
          left
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-3 py-1 rounded-md ${
              currentPage === pageNumber
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-500'
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-green-500 disabled:opacity-50"
        >
          last
        </button>
      </div>
    );
  };

  if (loading) {
    return <div>download...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center w-full py-4">
        <div className="flex justify-center items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-green-500"><i className="ri-home-3-line"></i>Home</Link>
          <span>/</span>
          <span className="text-gray-900">Products</span>
        </div>
        <div className="flex justify-center items-center text-black text-2xl font-bold mt-2">
          <h1>BOOKS NEW</h1>
        </div>
        <div className="flex justify-center items-center text-black overflow-hidden mt-2">
          <p className=" text-center">
            Discover your favorite book: you will find a wide range of selected books from bestseller
            to newcomer, children's book to crime novel or thriller to science fiction novel
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 h-full">
        <div className="col-span-4 bg-white p-4">
          <div className="text-[20px] justify-center items-center font-bold text-gray-900 mb-4">
            <h2>Product categories</h2>
            <div className="border-b w-full mt-2"></div>
            <div className="mt-4 font-normal text-gray-600">
              <ul className='list-none '>
                {categoriesData.data && categoriesData.data.map((category) => (
                  <li className='hover:text-green-500'
                    key={category.id}
                    onClick={() => handleCategoryClick(category.name)}
                    style={{ cursor: "pointer", fontWeight: selectedCategory === category.name ? 'bold' : 'normal' }}
                  >
                    {category.name}
                  </li>
                ))}
                {selectedCategory && (
                  <li
                    onClick={() => handleCategoryClick(null)}
                    style={{ cursor: "pointer", marginTop: '10px' }}
                  >
                    All Categories
                  </li>
                )}
              </ul>
            </div>
            <div className="text-[20px] justify-center items-center font-semibold text-gray-900 mt-10 mb-4">
              <h2>Filters</h2>
              <div className="border-b w-full mt-2"></div>
            </div>
            <div className="text-[20px] justify-center items-center font-semibold text-gray-900 mt-10 mb-4">
              <h2>Availability</h2>
              <div className="border-b w-full mt-2"></div>
              <div className="mt-4 font-normal text-gray-600">
                <div>In stock (28)</div>
                <div>Out of stock(2)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 bg-white p-4">
          <div className="grid grid-cols-3 gap-4">
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
                  onClick={() => {
                    console.log('add to cart:', product); 
                    addToCart(product); 
                  }}
                  className="add-to-cart-button bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 mt-4"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          {totalPages > 1 && renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Products;