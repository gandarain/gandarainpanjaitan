import React from "react";
import Image from 'next/image'

import constants from "../../constants"
import styles from "./portfolio.module.css"

const {
  portfolio_content: {
    title,
    subtitle,
    portfolio_item
  }
} = constants

const renderWorkItem = () => (
  <div className={`${styles.portfolio__container} container grid`}>
    {portfolio_item.map(item => (
      <div className={styles.portfolio__card} key={item.id}>
        <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.portfolio__image}
        />
        <div>
          <h3 className={styles.portfolio__title}>{item.title}</h3>
          <h3 className={styles.portfolio__title}>{item.category}</h3>
          <a href="#" className={styles.portfolio__button}>
            Detail <i className={`bx bx-right-arrow-alt ${styles.portfolio__button__icon}`} />
          </a>
        </div>
      </div>
    ))}
  </div>
)

const Portfolio = () => (
  <section className="portfolio section" id="portfolio">
    <h2 className="section__title">{title}</h2>
    <span className="section__subtitle">{subtitle}</span>
    {renderWorkItem()}
  </section>
)

export default Portfolio