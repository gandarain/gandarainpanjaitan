import React, { useState, useRef } from "react";
import Image from 'next/image'

import ProjectDetail from "../projectDetail/ProjectDetail";
import constants from "../../constants"
import hooks from "@/hooks"
import styles from "./portfolio.module.css"

const { AnimationOnScrollView } = hooks
const {
  portfolio_content: {
    title,
    subtitle,
    portfolio_item
  }
} = constants

const renderWorkItem = ({ setShowProjectDetail, setSelectedProject }) => (
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

const renderProjectDetail = ({ setShowProjectDetail, selectedProject }) => (
  <ProjectDetail
    onClose={() => setShowProjectDetail(false)}
    {...selectedProject}
  />
)

const usePortfolio = () => {
  const [showProjectDetail, setShowProjectDetail] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  return {
    showProjectDetail,
    setShowProjectDetail,
    selectedProject,
    setSelectedProject
  }
}

const Portfolio = () => {
  const state = usePortfolio()
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`portfolio section ${isVisible ? 'appear' : ''}`}
      id="portfolio"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      {renderWorkItem(state)}
      {state.showProjectDetail && renderProjectDetail(state)}
    </section>
  )
}

export default Portfolio