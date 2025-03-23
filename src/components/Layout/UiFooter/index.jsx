import React from 'react'

const UiFooter = () => {
  return (
    <div className="bg-white text-black grid grid-cols-12 p-4 mt-16" >
   
    <div className="footer-left col-span-4 flex flex-col items-start justify-start">
      <div className="logo">
        <img
          src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo_1.png?v=1729758360&width=144"
          alt="logo"
        />
      </div>
      <div className="footer-item mt-10">
        <p>Bokifa draws book lovers of all ages into a community,</p>
        
        <p>engage with booklovers and meet their favourite</p>
        
        <p>literary personalities.</p>
        <span className='block mt-3 pt-1 mb-2 pb-1 text-[30px] font-semibold leading-[32px] text-[#e2bb80] '>+(84) - 1800 - 4635</span>
        <span className='block text-[16px]'>contact@example.com</span>
      </div>
    </div>
  
    
    <div className="category col-span-2 flex flex-col items-start justify-start">
      <h3 className='border-b border-gray-300 w-7/12 text-[20px]'>Category</h3>
     <div className="item-menu mt-5 ">
     <ul className='space-y-2'>
        <li className=' hover:text-green-500'>
            <a href="http://">Action Books</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Press</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Careers</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Contact</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Press Kit</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Blog</a>
        </li>
      </ul>
     </div>
    </div>
    
    <div className="useful-links col-span-2 flex flex-col items-start justify-start">
      <h3 className='border-b border-gray-300 w-7/12 text-[20px]'>Useful Links</h3>
      <div className="item-menu mt-5 ">
     <ul className='space-y-2'>
        <li className=' hover:text-green-500'>
            <a href="http://">Secure Shopping</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Privacy Policy</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Terms of Use</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Shipping Policy</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Returns Policy</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Payment Option</a>
        </li>
      </ul>
     </div>
    </div>
  
    <div className="explore col-span-2 flex flex-col items-start justify-start">
      <h3 className='border-b border-gray-300 w-7/12 text-[20px]'>Explore</h3>
      <div className="item-menu mt-5 ">
     <ul className='space-y-2'>
        <li className=' hover:text-green-500'>
            <a href="http://">About us</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Store Locator</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Kids Club</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Blogs</a>
        </li>
       
      </ul>
     </div>
    </div>
  
    <div className="get-in-touch col-span-2 flex flex-col items-start justify-start">
      <h3 className='border-b border-gray-300 w-7/12 text-[20px]'>Get in Touch</h3>
      <div className="item-menu mt-5 ">
     <ul className='space-y-2'>
        <li className=' hover:text-green-500'>
            <a href="http://">Careers</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Become a Franchisee</a>
        </li>
        <li className=' hover:text-green-500'>
            <a href="http://">Contact Us</a>
        </li>
       
       
      </ul>
     </div>
    </div>
  </div>
  

  )
}

export default UiFooter