import React from 'react'

import constants from '@/constants'
import styles from './home.module.css'

const {
  home_content: {
    social_media
  }
} = constants

const Social = () => (
	<div className={styles.home__social}>
    {social_media.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className={styles.home__social__icon} target="_blank"
      >
        <i className={`uil uil-${item.icon}`} />
      </a>
    ))}
  </div>
)

export default Social