import React, { useState } from "react";

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

const activeLinkStyle = (activeIndex, index) => (
  activeIndex === index ? `${styles.footer__link} ${styles.active__footer__link}` : styles.footer__link
)

const renderListButton = ({ activeIndex, setActiveIndex }) => (
  <ul className={styles.footer__list}>
    {button.map((item, index) => (
      <li key={item.id} onClick={() => setActiveIndex(index)}>
        <a
          href={item.id}
          className={activeLinkStyle(activeIndex, index)}>
            {item.title}
          </a>
      </li>
    ))}
  </ul>
)

const useFooterHooks = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return {
    activeIndex,
    setActiveIndex
  }
}

const Footer = () => {
  const state = useFooterHooks()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <h1 className={styles.footer__title}>{title}</h1>
        {renderListButton(state)}
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
}

export default Footer