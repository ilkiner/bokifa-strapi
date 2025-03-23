import React from 'react';
import styles from './style.module.scss';
import "remixicon/fonts/remixicon.css";

const UiHeader = () => {
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
          <span style={{ cursor: 'pointer' }}> <a href="http://"><i class="ri-user-3-line"></i></a> </span>
          <span style={{ cursor: 'pointer' }}> <a href="http://"><i class="ri-poker-hearts-line"></i></a> </span>
          <span style={{ cursor: 'pointer' }}> <a href="http://"><i class="ri-shopping-bag-4-line"></i></a> </span>
        </div>
        <div className={styles.NavMenu}>
          <ul className={styles.navMenuList}>
            <li><a href="http://">Home <i class="ri-arrow-drop-down-line"></i></a></li>
            <li><a href="http://">Shop <i class="ri-arrow-drop-down-line"></i></a></li>
            <li><a href="http://">Blogs <i class="ri-arrow-drop-down-line"></i></a></li>
            <li><a href="http://">Pages <i class="ri-arrow-drop-down-line"></i></a></li>
            <li><a href="http://">Contact </a></li>
            
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
