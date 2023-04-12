import React from "react"

import SkillsContent from "./SkillsContent"
import constants from "@/constants"
import styles from "./skills.module.css"

const {
  skills_content: {
    title,
    subtitle,
    programming,
    tools
  }
} = constants

const Skills = () => (
  <section className="skills section" id="skills">
    <h2 className="section__title">{title}</h2>
    <span className="section__subtitle">{subtitle}</span>
    <div className={`${styles.skills__container} container grid`}>
      <SkillsContent content={programming} />
      <SkillsContent content={tools} />
    </div>
  </section>
)

export default Skills
