import React from "react";

import styles from './Filter.module.css';


const Filter = ({onChange}) => {

    return (
      <div className={styles.filter}>
        <select className={styles.sortBy} onChange={onChange}> 
          <option value="asc">Sort By </option>
          <option value="asc">Sort By: Name A to Z</option>
          <option value="desc">Sort By: Name Z to A</option>
          <option value="lowToHigh">Sort By: Price Low to High</option>
          <option value="highToLow">Sort By: Price High to Low</option>
        </select>
      </div>
    );
}

export default Filter

