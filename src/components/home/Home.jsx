import React from "react";
import Social from "./Social";
import Data from "./Data";
import styles from './home.module.css'

const Home = () => (
	<section className="home section"  id="home">
    <div className={`${styles.home__container} container grid`}>
      <div className={`${styles.home__content} grid`}>
        <Social />
        <div className={styles.home__img}></div>
        <Data />
      </div>
    </div>
  </section>
)

export default Home