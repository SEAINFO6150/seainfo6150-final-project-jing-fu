import React from "react";

import styles from './Filter.module.css';


const Filter = ({onChange}) => {

    return (
      <div className={styles.filter}>
        <select className={styles.sortBy} onChange={onChange}>
          <option value="asc">Name A to Z</option>
          <option value="desc">Name Z to A</option>
          <option value="lowToHigh">Price Low to High</option>
          <option value="highToLow">Price High to Low</option>
        </select>
      </div>
    );
}

export default Filter

