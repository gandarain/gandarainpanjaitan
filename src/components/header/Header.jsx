import React, { useState } from "react"
import constants from "@/constants"
import styles from "./header.module.css"

const { header_menu } = constants

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const menuStyle = () => (
    toggle ? `${styles.nav__menu} ${styles.show__menu}` : styles.nav__menu
  )

  const activeLinkStyle = (index) => (
    activeIndex === index ? `${styles.nav__link} ${styles.active__link}` : styles.nav__link
  )

  const renderCloseIcon = () => (
    <i
      className={`uil uil-times ${styles.nav__close}`}
      onClick={() => setToggle(!toggle)}
    />
  )

  const renderToggleIcon = () => (
    <div className={styles.nav__toggle} onClick={() => setToggle(!toggle)}>
      <i className={`uil uil-apps`} />
    </div>
  )

  const renderMenu = () => (
    header_menu.content_header.map((item, index) => (
      <li key={index} className={styles.nav__item} onClick={() => setActiveIndex(index)}>
        <a href={`#${item.id}`} className={activeLinkStyle(index)}>
          <i className={`uil uil-${item.icon} ${styles.nav__icon}`} />
          {item.text}
        </a>
      </li>
    ))
  )

  const renderContainerMenu = () => (
    <div className={menuStyle()}>
      <ul className={`${styles.nav__list} grid`}>
        {renderMenu()}
      </ul>
      {renderCloseIcon()}
    </div>
  )

  const renderName = () => (
    <a href="index.html" className={styles.nav__logo}>
      {header_menu.name}
    </a>
  )

  const renderNav = () => (
    <nav className={`${styles.nav} container`}>
      {renderName()}
      {renderContainerMenu()}
      {renderToggleIcon()}
    </nav>
  )

  const renderHeader = () => (
    <header className={styles.header}>
      {renderNav()}
    </header>
  )

  return renderHeader()
}
export default Header
