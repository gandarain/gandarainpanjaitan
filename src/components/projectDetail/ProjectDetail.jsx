import React from 'react'

import styles from './projectDetail.module.css'

const renderInfoItem = (info) => (
  <ul className={`${styles.project__detail__modal__services} grid`}>
    {info.map(item => (
      <li key={item.id} className={styles.project__detail__modal__service}>
        <i className={`uil uil-check-circle ${styles.project__detail__modal__icon}`} />
        <p className={styles.project__detail__modal__info}>
          {item.title}
        </p>
      </li>
    ))}
  </ul>
)

const renderResult = (result) => (
  <ul className={`${styles.project__detail__modal__services} grid`}>
    {result.map(item => (
      <li key={item.id} className={styles.project__detail__modal__service}>
        <a
          href={item.link}
          className={styles.project__detail__link}
          target="_blank"
        >
          <i className={`bx ${item.icon} ${styles.project__detail__modal__icon}`} />
          <p className={styles.project__detail__link__item}>{item.title}</p>
        </a>
      </li>
    ))}
  </ul>
)

const ProjectDetail = ({ onClose, title, description, info, result }) => (
	<div className={styles.project__detail__modal}>
    <div className={styles.project__detail__modal__content}>
      <i onClick={() => onClose()} className={`uil uil-times ${styles.project__detail__modal__close}`} />
      <h3 className={styles.project__detail__modal__title}>{title}</h3>
      <p className={styles.project__detail__modal__description}>
        {description}
      </p>
      {renderInfoItem(info)}
      <div className={styles.project__detail__result}>
        <h3 className={styles.project__detail__modal__title}>Result</h3>
        {result.length > 0 ? renderResult(result) : <p className={styles.project__detail__modal__info}>
          Private Repository
        </p>}
      </div>
    </div>
  </div>
)

export default ProjectDetail