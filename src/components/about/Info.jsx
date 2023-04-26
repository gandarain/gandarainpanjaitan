import React from 'react'

import constants from '@/constants'
import styles from './about.module.css'

const { about_content: {
  info
} } = constants

const renderInfo = () => (
  info.map(item => (
    <div key={item.title} className={styles.about__box}>
      <i className={`bx bx-${item.icon} ${styles.about__icon}`} />
      <h3 className={styles.about__title}>{item.title}</h3>
      <span className={styles.about__subtitle}>{item.description}</span>
    </div>
  ))
)

const Info = () => (
  <div className={`${styles.about__info} grid`}>
   {renderInfo()}
  </div>
)

export default Info