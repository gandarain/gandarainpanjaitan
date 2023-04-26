import React from 'react'

import styles from './skills.module.css'

const renderSkillItem = (skill) => (
  <div key={skill.title} className={styles.skills__data}>
    <i className="bx bx-badge-check" />
    <div>
      <h3 className={styles.skills__name}>{skill.title}</h3>
      <span className={styles.skills__level}>{skill.level}</span>
    </div>
  </div>
)

const renderSkillsGroup = (items) => {
  const chunkSize = 3
  const result = []

  for (let index = 0; index < items.length; index+=chunkSize) {
    result.push(items.slice(index, index+chunkSize))
  }

  return result.map((item, index) => (
    <div key={index} className={styles.skills__group}>
      {item.map((skill) => renderSkillItem(skill))}
    </div>
  ))
}

const SkillsContent = ({ content }) => (
  <div className={styles.skills__content}>
    <h3 className={styles.skills__title}>{content.title}</h3>
    <div className={styles.skills__box}>
      {renderSkillsGroup(content.items)}
    </div>
  </div>
)

export default SkillsContent
