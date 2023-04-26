import { Provider } from '../context'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/header/Header'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Footer from '@/components/footer/Footer'
import Portfolio from '@/components/portfolio/Portfolio'
import Qualification from '@/components/qualification/Qualification'
import Contact from '@/components/contact/Contact'

export default function Container() {
  return (
    <>
      <Provider>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Qualification />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </main>
      </Provider>
      <Analytics />
    </>
  )
}
