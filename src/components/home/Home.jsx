import React, { useRef } from 'react'

import Social from './Social'
import Data from './Data'
import hooks from '@/hooks'
import styles from './home.module.css'

const { AnimationOnScrollView } = hooks

const Home = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`home section ${isVisible ? 'appear' : ''}`}
      id="home"
    >
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <Social />
          <div className={styles.home__img}></div>
          <Data />
        </div>
      </div>
    </section>
  )
}

export default Home