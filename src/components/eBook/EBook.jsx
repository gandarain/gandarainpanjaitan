import React, { useRef } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

import constants from '../../constants'
import hooks from '@/hooks'
import styles from './eBook.module.css'

const { AnimationOnScrollView } = hooks
const {
  e_book_content: {
    title,
    description,
    e_book_item
  }
} = constants

const renderPublicationItem = () => (
  e_book_item.map(item => (
    <SwiperSlide key={item.id}>
      <div className={styles.e__book__card}>
        <Image
          src={item.image}
          alt="portfolio_image"
          className={styles.e__book__image}
        />
        <div className={styles.e__book__sub_item}>
          <h3 className={styles.e_book__title}>{item.title}</h3>
          <h3 className={styles.e_book__title}>{item.subtitle}</h3>
          <a
            className={styles.e_book__button}
              onClick={(e) => {
                e.preventDefault()
                window.open(item.link)
              }}
              target="_blank"
          >
            Detail <i className={`bx bx-right-arrow-alt ${styles.e_book__button__icon}`} />
          </a>
        </div>
      </div>
    </SwiperSlide>
  ))
)

const EBook = () => {
  const domRef = useRef()
  const { isVisible } = AnimationOnScrollView(domRef)

  return (
    <section
      ref={domRef}
      className={`eBook section ${isVisible ? 'appear' : ''}`}
      id="eBook"
    >
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{description}</span>
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
            {renderPublicationItem()}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default EBook