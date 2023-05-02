import React, { useRef, useState } from 'react'
import Image from 'next/image'

import constants from '../../constants'
import hooks from '@/hooks'
import styles from './portfolio.module.css'

const { AnimationOnScrollView } = hooks
const {
  portfolio_content: {
    title,
    subtitle,
    portfolio_item,
    portfolio_filter
  }
} = constants

const renderPortfolioFilter = ({ selectedFilter, setSelectedFilter }) => (
  <div className={styles.portfolio__filter}>
    {
      portfolio_filter.map(item => (
        <div
          onClick={() => setSelectedFilter(item.id)}
          key={item.id}
          className={`${styles.portfolio__filter__item} ${selectedFilter === item.id ? styles.portfolio__filter__item__selected : ''}`}
        >
          {item.title}
        </div>
      ))
    }
  </div>
)

const renderWorkItem = ({ setShowProjectDetail, setSelectedProject}, selectedFilter) => (
  <div className={`${styles.portfolio__container} container grid`}>
    {portfolio_item.filter(item => item.filterId === selectedFilter).map(item => (
      <div className={styles.portfolio__card} key={item.id}>
        <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.portfolio__image}
        />
        <div>
          <h3 className={styles.portfolio__title}>{item.title}</h3>
          <h3 className={styles.portfolio__title}>{item.category}</h3>
          {item.position !== null && <h5 className={styles.portfolio__title}>{item.position}</h5>}
          <a
            className={styles.portfolio__button}
            onClick={() => {
              setShowProjectDetail(true)
              setSelectedProject(item)
            }}
          >
            Detail <i className={`bx bx-right-arrow-alt ${styles.portfolio__button__icon}`} />
          </a>
        </div>
      </div>
    ))}
  </div>
)

const Portfolio = (props) => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)
  const [selectedFilter, setSelectedFilter] = useState(1)

  return (
    <section
      ref={domRef}
      className={`portfolio section ${isVisible ? 'appear' : ''}`}
      id="portfolio"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      {renderPortfolioFilter({selectedFilter, setSelectedFilter})}
      {renderWorkItem(props, selectedFilter)}
    </section>
  )
}

export default Portfolio