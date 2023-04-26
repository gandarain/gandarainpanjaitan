import React, { useRef } from 'react'

import SkillsContent from './SkillsContent'
import constants from '@/constants'
import hooks from '@/hooks'
import styles from './skills.module.css'

const { AnimationOnScrollView } = hooks
const {
  skills_content: {
    title,
    subtitle,
    programming,
    tools
  }
} = constants

const Skills = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`skills section ${isVisible ? 'appear' : ''}`}
      id="skills"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className={`${styles.skills__container} container grid`}>
        <SkillsContent content={programming} />
        <SkillsContent content={tools} />
      </div>
    </section>
  )
}

export default Skills
