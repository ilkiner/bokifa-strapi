import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import "remixicon/fonts/remixicon.css";
import { CartContext } from './../../../pages/CartContext/index.jsx'; 

const UiHeader = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoWrapper}>
          <img
            src="https://ap-bokifa.myshopify.com/cdn/shop/files/logo.png?v=1729482566"
            alt="Logo"
            style={{ height: '32px' }} 
          />
        </div>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search.."
            className={styles.inputField} 
          />
         <button className={styles.btnSearchHeader}>
  <i className="ri-search-line"></i>
  <span>Search</span>
</button>

        </div>
        <div className={styles.iconsWrapper}>
          <span style={{ cursor: 'pointer' }}> <a href="http://"><i className="ri-user-3-line"></i></a> </span>
          <span style={{ cursor: 'pointer' }}> <a href="http://"><i className="ri-poker-hearts-line"></i></a> </span>
          <Link to="/cart"> 
            <span style={{ cursor: 'pointer' }}>
              <i className="ri-shopping-bag-4-line"></i>
              {cart.length > 0 && (
                <span className={styles.cartCount}>{cart.length}</span>
              )}
            </span>
          </Link>
        </div>
        <div className={styles.NavMenu}>
          <ul className={styles.navMenuList}>
          <li><Link to="/">Home <i className="ri-arrow-drop-down-line"></i></Link></li>
          <li><Link to="/products">Shop <i className="ri-arrow-drop-down-line"></i></Link></li>
            <li><Link to="/blogs">Blogs <i className="ri-arrow-drop-down-line"></i></Link></li>
            <li><Link to="/pages">Pages <i className="ri-arrow-drop-down-line"></i></Link></li>
            <li><Link to="/contact">Contact </Link></li>
            
          </ul>
          <div className={styles.HeaderContact}>
            <span> Need help? Call Us:</span>
            <span>+34343342334</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default UiHeader;