import React from "react";
import styles from "./style.module.scss"; 

const ScrollText = () => {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollText}>
        <span>15,254 Total Books</span> • 
        <span>97% Happy Customers</span>
        <span>1,258 Authors</span> • 
        <span>20,898 Books Sold</span> • 
        <span>97% Happy Customers</span> • 
        <span>15,254 Total Books</span> 
        <span>1,258 Authors</span> • 
        <span>20,898 Books Sold</span> • 
        <span>97% Happy Customers</span> • 
        <span>15,254 Total Books</span> 
      </div>
    </div>
  );
};

export default ScrollText;