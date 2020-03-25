import React from 'react'

import styles from "./MagList.module.css";
import MagListItem from './MagListItem';

const MagList = ({ magazines }) => {

  return (
    <div className={styles.container}>
      {magazines.map(magazine => (
        <MagListItem key={magazine.title} magazine={magazine} />
      ))}
    </div>
  )
}

export default MagList