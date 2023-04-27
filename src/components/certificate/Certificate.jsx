import React, { useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

import constants from '@/constants'
import hooks from '@/hooks'
import styles from './certificate.module.css'

const { AnimationOnScrollView } = hooks
const {
  certificate_constant: {
    title,
    subtitle,
    certificate_item
  }
} = constants

const renderCertificateItem = () => (
  certificate_item.map(item => (
    <SwiperSlide key={item.id}>
      <div className={styles.certificate__card}>
        <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.certificate__image}
        />
        <div className={styles.certificate__sub__item}>
          <h3 className={styles.portfolio__title}>{item.title}</h3>
          <h3 className={styles.portfolio__title}>{item.subtitle}</h3>
          <a
            className={styles.certificate__button}
              onClick={(e) => {
                e.preventDefault()
                window.open(item.link)
              }}
              target="_blank"
          >
            Detail <i className={`bx bx-right-arrow-alt ${styles.certificate__button__icon}`} />
          </a>
        </div>
      </div>
    </SwiperSlide>
  ))
)

const Certificate = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`certificate section ${isVisible ? 'appear' : ''}`}
      id="about"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      <div className={`${styles.container__slider} container`}>
        <div className={styles.sub__container__slider}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {renderCertificateItem()}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Certificate