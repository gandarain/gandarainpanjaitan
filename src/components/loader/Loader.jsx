import React from 'react'

import styles from './loader.module.css'

const Loader = () => (
  <div className={styles.loader__container}>
    <div className={styles.loader__content}>
     <div className={styles.loader} />
    </div>
  </div>
)

export default Loader