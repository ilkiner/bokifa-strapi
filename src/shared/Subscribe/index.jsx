import React from 'react';

const Subscribe = () => {
  return (
    <div className="bg-white py-10 mt-36 border-b border-gray-400 w-full border-t ">
      <div className="container mx-auto px-4 flex items-center mt-24 justify-between">
       
        <div className="text-left">
         <div className="text flex p-4 items-stretch ">
         <h2 className="text-2xl font-serif font-light">Stay in the know</h2>
          <p className="text-gray-600 text-sm mt-2 ml-3">
            Subscribe to our newsletter and stay updated on latest offers,
            discounts and events near you.
          </p>
         </div>
        </div>

        
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Email id"
            className="border border-gray-300 rounded-md py-2 px-4 w-64 z-[1]  focus:outline-none focus:border-green-500 text-sm"
          />
          <button className="bg-green-500 hover:bg-green-700 text-white rounded-md py-2 px-4 mr-4 z-[8]  focus:outline-none text-sm flex items-center">
            Subscribe
            <span className="ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                
                />
              </svg>
            </span>
          </button>
        </div>

    
        <div className="flex items-center space-x-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="ri-facebook-box-fill bg-blue-500 border-blue-500 text-lg border-8 rounded-xl  p-2   "></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="ri-instagram-fill text-purple-500 text-lg border-8 rounded-xl  p-2"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <i className="ri-pinterest-fill text-pink-500 text-lg border-8 rounded-xl p-2"></i>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Subscribe;
