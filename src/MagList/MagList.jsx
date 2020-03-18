import React from 'react'

import styles from "./MagList.module.css";

const MagList = () => {
  return (
    <div className={styles.magList}>
    <div><img src="/images/treefrog.jpg" alt="tree frog" /><h5>title:xxx</h5><input type="submit" value="Subscribe"/></div>
    <div><img src="/images/treefrog.jpg" alt="tree frog" /><h5>title:xxx</h5><input type="submit" value="Subscribe"/></div>
    <div><img src="/images/treefrog.jpg" alt="tree frog" /><h5>title:xxx</h5><input type="submit" value="Subscribe"/></div>
    <div><img src="/images/treefrog.jpg" alt="tree frog" /><h5>title:xxx</h5><input type="submit" value="Subscribe"/></div>
    </div>
  )
}

export default MagList