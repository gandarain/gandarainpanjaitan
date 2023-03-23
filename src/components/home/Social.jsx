import React from "react";

import styles from './home.module.css'

const Social = () => (
	<div className={styles.home__social}>
    <a href="https://www.instagram.com/" className={styles.home__social__icon} target="_blank">
      <i className="uil uil-instagram" />
    </a>
    <a href="https://www.instagram.com/" className={styles.home__social__icon} target="_blank">
      <i className="uil uil-instagram" />
    </a>
    <a href="https://www.instagram.com/" className={styles.home__social__icon} target="_blank">
      <i className="uil uil-github-alt" />
    </a>
  </div>
)

export default Social