import React, { useState, useContext, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { Context } from '../../context'
import constants from '@/constants'
import hooks from '@/hooks'
import actions from '@/context/actions'
import styles from './header.module.css'

const { AnimationOnScrollView } = hooks
const {
  header_menu,
  theme: {
    LIGHT,
    DARK
  }
} = constants
const { SET_ACTIVE_INDEX } = actions

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const { state, dispatch } = useContext(Context)
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => setHasMounted(true))

  const menuStyle = () => (
    toggle ? `${styles.nav__menu} ${styles.show__menu}` : styles.nav__menu
  )

  const activeLinkStyle = (index) => (
    state.active_index === index ? `${styles.nav__link} ${styles.active__link}` : styles.nav__link
  )

  const renderCloseIcon = () => (
    <i
      className={`uil uil-times ${styles.nav__close}`}
      onClick={() => setToggle(!toggle)}
    />
  )

  const renderToggleIcon = () => (
    <div className={styles.nav__toggle} onClick={() => setToggle(!toggle)}>
      <i className={'uil uil-apps'} />
    </div>
  )

  const renderMenu = () => (
    header_menu.content_header.map((item, index) => (
      <li
        key={index} className={styles.nav__item}
        onClick={() => {
          dispatch({
            type: SET_ACTIVE_INDEX,
            payload: index
          })
        }}
      >
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

  const renderThemeToggler = () => {
    if (!hasMounted) return null

    return (
      <button
        onClick={() => {
          if (theme === LIGHT) setTheme(DARK)
          else setTheme(LIGHT)
        }}
        className={styles.theme__button}
      >
        {
          theme === LIGHT ?
          <i className={`bx bx-moon ${styles.button__theme}`} /> : 
          <i className={`bx bxs-moon ${styles.button__theme}`} />
        }
      </button >
    )
  }

  const renderName = () => (
    <>
      <a href="https://www.gandarainpanjaitan.com/" className={styles.nav__logo}>
        {header_menu.name}
      </a>
      {renderThemeToggler()}
    </>
  )

  const renderNav = () => (
    <nav className={`${styles.nav} container`}>
      {renderName()}
      {renderContainerMenu()}
      {renderToggleIcon()}
    </nav>
  )

  const renderHeader = () => (
    <header
      ref={domRef}
      className={`${styles.header} ${isVisible ? 'appear' : ''}`}
    >
      {renderNav()}
    </header>
  )

  return renderHeader()
}
export default Header
