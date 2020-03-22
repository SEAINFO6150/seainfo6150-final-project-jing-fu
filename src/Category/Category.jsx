import React from 'react'
import MagList from "../MagList/MagList";
import {Link} from "react-router-dom";

import styles from './Category.module.css';
import magazines from ".././data/magazines.json";



const Categroy = ({categoryId}) => {
  
  const filtedMagList = magazines.filter( mag => mag.categoryId === categoryId);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.categoryNames}>
         <h3>Categroies</h3>
          <Link className={styles.link} to="/aviation">Aviation</Link>
          <Link className={styles.link} to="/computer">Computer</Link>
          <Link className={styles.link} to="/engineering">Engineering</Link>
          <Link className={styles.link} to="/electronics">Electronics</Link>
          <Link className={styles.link} to="/science">Science</Link>
        </div>
        <div className={styles.display}>
         <h3>Category name: {filtedMagList[0].categoryName}</h3>
         {/* <p>props:category description</p> */}
         <div className={styles.categroylist}>
         <MagList magazines={filtedMagList}/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Categroy
