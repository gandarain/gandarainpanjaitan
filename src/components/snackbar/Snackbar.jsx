import React from 'react'

import styles from './snackbar.module.css'

const Snackbar = ({ title, message, onClose }) => (
  <div className={styles.snackbar__detail__modal}>
    <div className={styles.snackbar__detail__modal__content}>
      <i onClick={() => onClose()} className={`uil uil-times ${styles.snackbar__detail__modal__close}`} />
      <h3 className={styles.snackbar__detail__modal__title}>{title}</h3>
      <p className={styles.snackbar__detail__modal__description}>
        {message}
      </p>
    </div>
  </div>
)

export default Snackbar