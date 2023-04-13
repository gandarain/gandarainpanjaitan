import React from "react";

import constants from "@/constants";
import styles from "./footer.module.css"

const {
  home_content: {
    social_media
  }
} = constants;

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.footer__container} container`}>
      <h1 className={styles.footer__title}>Ganda Rain Panjaitan</h1>
      <ul className={styles.footer__list}>
        <li>
          <a href="#home" className={styles.footer__link}>Home</a>
        </li>
        <li>
          <a href="#about" className={styles.footer__link}>About</a>
        </li>
        <li>
          <a href="#skills" className={styles.footer__link}>Skills</a>
        </li>
      </ul>
      <div className={styles.footer__social}>
        {social_media.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={styles.footer__social__link}
            target="_blank"
          >
            <i className={`uil uil-${item.icon}`} />
          </a>
      ))}
      </div>
      <span className={styles.footer__copy}>
        &#169; Gan[Z]. All rights reserved
      </span>
    </div>
  </footer>
)

export default Footer