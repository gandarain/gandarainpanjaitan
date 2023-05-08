import React, { useState, useRef } from 'react'

import hooks from '@/hooks'
import constants from '@/constants'
import styles from './qualification.module.css'

const { AnimationOnScrollView } = hooks
const {
  qualification_content: {
    title,
    subtitle,
    qualification_tabs,
    qualification_list
  }
} = constants

const findQualificationList = (selectedTabs) => {
  const result = []

  qualification_list.map(item => {
    if (item.qualification_id === selectedTabs) {
      result.push(item)
    }
  })
  
  return result
}

const renderTabs = ({ setSelectedTabs, selectedTabs, setQualificationList }) => (
  <div className={styles.qualification__tabs}>
    {qualification_tabs.map(item => (
      <div
        onClick={() => {
          setSelectedTabs(item.id)
          setQualificationList(findQualificationList(item.id))
        }}
        key={item.id}
        className={`${styles.qualification__button} ${selectedTabs === item.id ? '' : styles.qualification__active} button--flex`}
      >
        <i className={`uil ${item.icon} ${styles.qualification__icon}`} />
        {item.title}
      </div>
    ))}
  </div>
)

const rightBorder = () => (
  <div>
    <span className={styles.qualification__rounder} />
    <span className={styles.qualification__line} />
  </div>
)

const leftBorder = () => (
  <>
    <div />
    <div>
      <span className={styles.qualification__rounder} />
      <span className={styles.qualification__line} />
    </div>
  </>
)

const renderQualificationList = ({ qualificationList }) => (
  <div className={`${styles.qualification__content} ${styles.qualification__content__active}`}>
    {qualificationList.map((item, index) => (
      <div key={item.id} className={styles.qualification__data}>
        {index % 2 === 1 ? leftBorder() : null}
        <div>
          <h3 className={styles.qualification__title}>{item.title}</h3>
          <span
            onClick={(e) => {
              e.preventDefault()
              window.open(item.link)
            }}
            className={styles.qualification__subtitle}
          >
            {item.subtitle}
          </span>
          <div className={styles.qualification__calendar}>
            <i className="uil uil-calendar-alt" /> {item.date}
          </div>
        </div>
        {index % 2 === 0 ? rightBorder() : null}
      </div>
    ))}
  </div>
)

const useQualificationHooks = () => {
  const [selectedTabs, setSelectedTabs] = useState(qualification_tabs[0].id)
  const [qualificationList, setQualificationList] = useState(findQualificationList(selectedTabs))
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return {
    selectedTabs,
    setSelectedTabs,
    qualificationList,
    setQualificationList,
    domRef,
    isVisible
  }
}

const Qualification = () => {
  const state = useQualificationHooks()

  return (
    <section
      ref={state.domRef}
      className={`qualification section ${state.isVisible ? 'appear' : ''}`}
      id="qualification"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className={`${styles.qualification__container} container`}>
        {renderTabs(state)}
        <div className={styles.qualification__sections}>
          {renderQualificationList(state)}
        </div>
      </div>
    </section>
  )
}

export default Qualification