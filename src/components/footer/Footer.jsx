import React from "react";

import constants from "@/constants";
import styles from "./footer.module.css"

const {
  home_content: {
    social_media
  },
  footer_content: {
    title,
    button,
    copyright
  }
} = constants;

const renderListButton = () => (
  <ul className={styles.footer__list}>
    {button.map(item => (
      <li key={item.id}>
        <a href={item.id} className={styles.footer__link}>{item.title}</a>
      </li>
    ))}
  </ul>
)

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.footer__container} container`}>
      <h1 className={styles.footer__title}>{title}</h1>
      {renderListButton()}
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
        &#169;{copyright}
      </span>
    </div>
  </footer>
)

export default Footer