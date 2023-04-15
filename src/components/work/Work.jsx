import React from "react";
import Image from 'next/image'

import constants from "../../constants"
import styles from "./work.module.css"

const {
  work_content: {
    title,
    subtitle,
    work_item
  }
} = constants

const renderWorkItem = () => (
  <div className={`${styles.work__container} container grid`}>
    {work_item.map(item => (
      <div className={styles.work__card} key={item.id}>
        <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.work__image}
        />
        <div>
          <h3 className={styles.work__title}>{item.title}</h3>
          <h3 className={styles.work__title}>{item.category}</h3>
          <a href="#" className={styles.work__button}>
            Detail <i className={`bx bx-right-arrow-alt ${styles.work__button__icon}`} />
          </a>
        </div>
      </div>
    ))}
  </div>
)

const Work = () => (
  <section className="work section" id="portfolio">
    <h2 className="section__title">{title}</h2>
    <span className="section__subtitle">{subtitle}</span>
    {renderWorkItem()}
  </section>
)

export default Work