import React from 'react'
import MagList from "../MagList/MagList";
import Error from "../Error/Error";

import { Link } from "react-router-dom";

import styles from './Category.module.css';
import magazines from ".././data/magazines.json";



const Categroy = ({ categoryId }) => {

  const filtedMagList = magazines.filter(mag => mag.categoryId === categoryId);

  if (filtedMagList == null || filtedMagList.length == 0) {
    return <Error />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <section className={styles.categoryNames}>
          <div className={styles.title}>
            <h3>Categroies</h3>
          </div>
          <Link className={styles.link} to="/category/avia-001">Aviation</Link>
          <Link className={styles.link} to="/category/comp-001">Computer</Link>
          <Link className={styles.link} to="/category/eng-001">Engineering</Link>
          <Link className={styles.link} to="/category/elec-001">Electronics</Link>
          <Link className={styles.link} to="/category/sci-001">Science</Link>
        </section>
        <section className={styles.display}>
          <div className={styles.title}>
            <h3>{filtedMagList[0].categoryName} Magazines</h3>
          </div>
          <div className={styles.categroylist}>
            <MagList magazines={filtedMagList} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Categroy
